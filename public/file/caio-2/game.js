// Catch the Coffee - Game Logic
(function() {
    'use strict';

    // Game State
    const GameState = {
        mode: 'classic', // Solo modalità Classic
        score: 0,
        combo: 0,
        multiplier: 1,
        maxCombo: 0,
        hits: 0,
        spawns: 0,
        startTime: 0,
        endTime: 0,
        paused: false,
        gameRunning: false,
        audioEnabled: true,
        theme: 'light',
        reducedMotion: false,
        
        // Spawn settings
        spawnInterval: [1000, 1800], // ms - più veloce
        lifetime: 1500, // ms - più veloce
        difficultyLevel: 0,
        
        // Special items probabilities - più equilibrate
        goldProbability: 0.08,
        decafProbability: 0.05,
        thermoProbability: 0.04,
        
        // Multi spawn settings
        multiSpawnProbability: 0.15, // 15% chance di spawn multiplo
        maxMultiSpawn: 3, // Massimo 3 tazzine insieme
        
        // Combo settings
        comboWindow: 1000, // ms - più tempo per mantenere combo
        lastHitTime: 0,
        maxMultiplier: 5
    };

    // DOM Elements
    const elements = {
        app: document.getElementById('app'),
        homeScreen: document.getElementById('home-screen'),
        gameScreen: document.getElementById('game-screen'),
        arena: document.getElementById('arena'),
        timeDisplay: document.getElementById('time-display'),
        scoreDisplay: document.getElementById('score-display'),
        comboDisplay: document.getElementById('combo-display'),
        muteBtn: document.getElementById('mute-btn'),
        pauseBtn: document.getElementById('pause-btn'),
        pauseOverlay: document.getElementById('pause-overlay'),
        gameOverOverlay: document.getElementById('game-over-overlay'),
        finalScore: document.getElementById('final-score'),
        cupsHit: document.getElementById('cups-hit'),
        maxCombo: document.getElementById('max-combo'),
        accuracy: document.getElementById('accuracy'),
        scorePopup: document.getElementById('score-popup'),
        particles: document.getElementById('particles'),
    };

    // Audio System
    const Audio = {
        context: null,
        sounds: {},
        
        init() {
            try {
                this.context = new (window.AudioContext || window.webkitAudioContext)();
                this.createSounds();
            } catch (e) {
                console.warn('Web Audio API not supported');
            }
        },
        
        createSounds() {
            if (!this.context) return;
            
            // Hit sound
            this.sounds.hit = this.createTone(800, 0.1, 'sine');
            this.sounds.combo = this.createTone(1000, 0.15, 'sine');
            this.sounds.gold = this.createTone(1200, 0.2, 'triangle');
            this.sounds.decaf = this.createTone(200, 0.3, 'sawtooth');
            this.sounds.thermo = this.createTone(600, 0.25, 'square');
        },
        
        createTone(frequency, duration, type) {
            return () => {
                if (!this.context || !GameState.audioEnabled) return;
                
                const oscillator = this.context.createOscillator();
                const gainNode = this.context.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.context.destination);
                
                oscillator.frequency.setValueAtTime(frequency, this.context.currentTime);
                oscillator.type = type;
                
                gainNode.gain.setValueAtTime(0.1, this.context.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + duration);
                
                oscillator.start(this.context.currentTime);
                oscillator.stop(this.context.currentTime + duration);
            };
        },
        
        play(soundName) {
            if (this.sounds[soundName]) {
                this.sounds[soundName]();
            }
        }
    };

    // Particle System
    const Particles = {
        create(x, y, color = 'var(--accent)', count = 8) {
            if (GameState.reducedMotion) return;
            
            for (let i = 0; i < count; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.background = color;
                
                const angle = (i / count) * Math.PI * 2;
                const distance = 20 + Math.random() * 30;
                const dx = Math.cos(angle) * distance;
                const dy = Math.sin(angle) * distance;
                
                particle.style.setProperty('--dx', dx + 'px');
                particle.style.setProperty('--dy', dy + 'px');
                
                elements.particles.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 600);
            }
        }
    };

    // Score Popup
    const ScorePopup = {
        show(x, y, text, color = 'var(--success)') {
            const popup = elements.scorePopup.cloneNode(true);
            popup.textContent = text;
            popup.style.left = x + 'px';
            popup.style.top = y + 'px';
            popup.style.color = color;
            popup.hidden = false;
            
            elements.arena.appendChild(popup);
            
            setTimeout(() => {
                if (popup.parentNode) {
                    popup.parentNode.removeChild(popup);
                }
            }, 1000);
        }
    };

    // Cup Spawner
    const Spawner = {
        activeCups: new Set(),
        spawnTimer: null,
        
        start() {
            // Delay iniziale per dare tempo al giocatore di prepararsi
            setTimeout(() => {
                this.scheduleNextSpawn();
            }, 2000);
        },
        
        stop() {
            if (this.spawnTimer) {
                clearTimeout(this.spawnTimer);
                this.spawnTimer = null;
            }
            this.clearAllCups();
        },
        
        scheduleNextSpawn() {
            if (!GameState.gameRunning) return;
            
            const interval = this.getSpawnInterval();
            this.spawnTimer = setTimeout(async () => {
                await this.spawnCup();
                this.scheduleNextSpawn();
            }, interval);
        },
        
        getSpawnInterval() {
            const [min, max] = GameState.spawnInterval;
            const reduction = GameState.difficultyLevel * 100; // Ridotto da 50 a 100
            const adjustedMin = Math.max(1200, min - reduction); // Minimo più alto
            const adjustedMax = Math.max(1800, max - reduction); // Minimo più alto
            return adjustedMin + Math.random() * (adjustedMax - adjustedMin);
        },
        
        async spawnCup() {
            if (!GameState.gameRunning) return;
            
            // Controlla se fare spawn multiplo
            const shouldMultiSpawn = Math.random() < GameState.multiSpawnProbability;
            const spawnCount = shouldMultiSpawn ? 
                Math.floor(Math.random() * (GameState.maxMultiSpawn - 1)) + 2 : 1;
            
            for (let i = 0; i < spawnCount; i++) {
                const type = this.getCupType();
                const lifetime = this.getLifetime();
                const position = this.getRandomPosition();
                const isMultiSpawn = spawnCount > 1;
                
                const cup = this.createCup(type, position, lifetime, isMultiSpawn);
                elements.arena.appendChild(cup);
                this.activeCups.add(cup);
                GameState.spawns++;
                
                // Auto-remove after lifetime
                setTimeout(() => {
                    this.removeCup(cup, false);
                }, lifetime);
                
                // Piccolo delay tra spawn multipli per effetto visivo
                if (i < spawnCount - 1) {
                    // Aggiungi un piccolo delay per l'effetto visivo
                    await new Promise(resolve => setTimeout(resolve, 150));
                }
            }
        },
        
        getCupType() {
            const rand = Math.random();
            const total = GameState.goldProbability + GameState.decafProbability + GameState.thermoProbability;
            
            if (rand < GameState.goldProbability) return 'gold';
            if (rand < GameState.goldProbability + GameState.decafProbability && GameState.mode === 'classic') return 'decaf';
            if (rand < GameState.goldProbability + GameState.decafProbability + GameState.thermoProbability) return 'thermo';
            return 'normal';
        },
        
        getLifetime() {
            const reduction = GameState.difficultyLevel * 100; // Ridotto da 50 a 100
            return Math.max(1500, GameState.lifetime - reduction); // Minimo più alto
        },
        
        getRandomPosition() {
            const rect = elements.arena.getBoundingClientRect();
            const margin = 50; // Aumentato per le tazzine più grandi
            const bottomLimit = rect.height * 0.8; // 20% dal bottom
            const x = margin + Math.random() * (rect.width - 2 * margin);
            const y = margin + Math.random() * (bottomLimit - margin);
            return { x, y };
        },
        
        createCup(type, position, lifetime, isMultiSpawn = false) {
            const cup = document.createElement('button');
            cup.className = `cup ${type}`;
            cup.style.left = position.x + 'px';
            cup.style.top = position.y + 'px';
            cup.setAttribute('aria-label', `Tazzina di caffè ${type}`);
            
            // Set emoji based on type
            const emojis = {
                normal: '☕',
                gold: '🥇',
                decaf: '❌',
                thermo: '🫖'
            };
            cup.textContent = emojis[type] || '☕';
            
            // Add click handler
            cup.addEventListener('click', (e) => {
                e.preventDefault();
                this.hitCup(cup, type);
            });
            
            // Show animation
            requestAnimationFrame(() => {
                cup.classList.add('show');
                if (isMultiSpawn) {
                    cup.classList.add('multi-spawn');
                }
            });
            
            return cup;
        },
        
        hitCup(cup, type) {
            if (!this.activeCups.has(cup)) return;
            
            this.removeCup(cup, true);
            this.handleCupHit(type, cup);
        },
        
        removeCup(cup, wasHit) {
            if (!this.activeCups.has(cup)) return;
            
            this.activeCups.delete(cup);
            cup.classList.add('fade');
            
            setTimeout(() => {
                if (cup.parentNode) {
                    cup.parentNode.removeChild(cup);
                }
            }, 150);
            
            if (!wasHit) {
                this.handleCupMiss();
            }
        },
        
        handleCupHit(type, cup) {
            const rect = cup.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;
            
            GameState.hits++;
            const now = Date.now();
            const timeSinceLastHit = now - GameState.lastHitTime;
            
            // Check combo
            if (timeSinceLastHit < GameState.comboWindow) {
                GameState.combo++;
                GameState.multiplier = Math.min(GameState.maxMultiplier, 1 + Math.floor(GameState.combo / 3));
            } else {
                GameState.combo = 1;
                GameState.multiplier = 1;
            }
            
            GameState.lastHitTime = now;
            GameState.maxCombo = Math.max(GameState.maxCombo, GameState.combo);
            
            // Calculate score
            let baseScore = 10;
            let color = 'var(--success)';
            let sound = 'hit';
            
            switch (type) {
                case 'gold':
                    baseScore = 50;
                    color = 'var(--warning)';
                    sound = 'gold';
                    // Double multiplier for 3 seconds
                    this.applyGoldBonus();
                    break;
                case 'decaf':
                    baseScore = -20;
                    color = 'var(--danger)';
                    sound = 'decaf';
                    GameState.combo = 0;
                    GameState.multiplier = 1;
                    break;
                case 'thermo':
                    baseScore = 10;
                    color = 'var(--success)';
                    sound = 'thermo';
                    this.freezeTimer();
                    break;
                case 'normal':
                default:
                    if (GameState.combo > 1) {
                        sound = 'combo';
                    }
                    break;
            }
            
            const finalScore = baseScore * GameState.multiplier;
            GameState.score = Math.max(0, GameState.score + finalScore);
            
            // Visual feedback
            ScorePopup.show(x, y, `+${finalScore}`, color);
            Particles.create(x, y, color);
            Audio.play(sound);
            
            this.updateUI();
        },
        
        handleCupMiss() {
            GameState.combo = 0;
            GameState.multiplier = 1;
            this.updateUI();
        },
        
        applyGoldBonus() {
            const originalMultiplier = GameState.multiplier;
            GameState.multiplier = Math.min(GameState.maxMultiplier, GameState.multiplier * 2);
            
            setTimeout(() => {
                GameState.multiplier = originalMultiplier;
                this.updateUI();
            }, 3000);
        },
        
        freezeTimer() {
            GameState.endTime += 3000;
            this.updateUI();
        },
        
        clearAllCups() {
            this.activeCups.forEach(cup => {
                if (cup.parentNode) {
                    cup.parentNode.removeChild(cup);
                }
            });
            this.activeCups.clear();
        },
        
        updateUI() {
            elements.scoreDisplay.textContent = GameState.score;
            elements.comboDisplay.textContent = `x${GameState.multiplier}`;
        }
    };

    // Game Timer
    const Timer = {
        timer: null,
        
        start() {
            this.timer = setInterval(() => {
                if (GameState.paused) return;
                
                const now = Date.now();
                const remaining = Math.max(0, GameState.endTime - now);
                
                if (remaining <= 0) {
                    this.endGame();
                    return;
                }
                
                this.updateTimeDisplay(remaining);
                this.updateDifficulty();
            }, 100);
        },
        
        stop() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        },
        
        updateTimeDisplay(remaining) {
            const minutes = Math.floor(remaining / 60000);
            const seconds = Math.floor((remaining % 60000) / 1000);
            elements.timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        },
        
        updateDifficulty() {
            const elapsed = Date.now() - GameState.startTime;
            const newLevel = Math.floor(elapsed / 45000); // Every 45 seconds - più lento
            
            if (newLevel > GameState.difficultyLevel) {
                GameState.difficultyLevel = newLevel;
                
                // Update probabilities for special items - più graduale
                if (GameState.mode === 'classic') {
                    GameState.decafProbability = Math.min(0.15, 0.1 + newLevel * 0.01); // Ridotto
                }
                GameState.goldProbability = Math.min(0.12, 0.1 + newLevel * 0.005); // Ridotto
                GameState.thermoProbability = Math.min(0.06, 0.05 + newLevel * 0.003); // Ridotto
            }
        },
        
        endGame() {
            this.stop();
            Spawner.stop();
            GameState.gameRunning = false;
            this.showGameOver();
        },
        
        showGameOver() {
            const accuracy = GameState.spawns > 0 ? Math.round((GameState.hits / GameState.spawns) * 100) : 0;
            
            elements.finalScore.textContent = GameState.score;
            elements.cupsHit.textContent = GameState.hits;
            elements.maxCombo.textContent = GameState.maxCombo;
            elements.accuracy.textContent = accuracy + '%';
            
            elements.gameOverOverlay.hidden = false;
            
            // Save high score
            this.saveHighScore();
        },
        
        saveHighScore() {
            const key = `catchCoffee_highScore_${GameState.mode}`;
            const currentHigh = localStorage.getItem(key);
            const currentScore = parseInt(currentHigh) || 0;
            
            if (GameState.score > currentScore) {
                localStorage.setItem(key, GameState.score.toString());
            }
        }
    };

    // UI Manager
    const UI = {
        showScreen(screenName) {
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            document.getElementById(screenName + '-screen').classList.add('active');
        },
        
        startGame() {
            GameState.mode = 'classic';
            GameState.score = 0;
            GameState.combo = 0;
            GameState.multiplier = 1;
            GameState.maxCombo = 0;
            GameState.hits = 0;
            GameState.spawns = 0;
            GameState.difficultyLevel = 0;
            GameState.paused = false;
            GameState.gameRunning = true;
            
            // Set game duration - 2 minuti
            const duration = 120000;
            GameState.startTime = Date.now();
            GameState.endTime = GameState.startTime + duration;
            
            // Reset probabilities - Classic mode
            GameState.goldProbability = 0.08;
            GameState.decafProbability = 0.05;
            GameState.thermoProbability = 0.04;
            
            // Reset spawn settings - Classic mode
            GameState.spawnInterval = [1000, 1800];
            GameState.lifetime = 1500;
            
            this.showScreen('game');
            Spawner.start();
            Timer.start();
            this.updateUI();
        },
        
        pauseGame() {
            GameState.paused = true;
            elements.pauseOverlay.hidden = false;
            Spawner.stop();
        },
        
        resumeGame() {
            GameState.paused = false;
            elements.pauseOverlay.hidden = true;
            if (GameState.gameRunning) {
                Spawner.start();
            }
        },
        
        endGame() {
            GameState.gameRunning = false;
            GameState.paused = false;
            Spawner.stop();
            Timer.stop();
            this.showScreen('home');
        },
        
        updateUI() {
            elements.scoreDisplay.textContent = GameState.score;
            elements.comboDisplay.textContent = `x${GameState.multiplier}`;
        },
        
        setAudio(enabled) {
            GameState.audioEnabled = enabled;
            elements.muteBtn.setAttribute('aria-pressed', !enabled);
            elements.muteBtn.textContent = enabled ? '🔊' : '🔇';
            localStorage.setItem('catchCoffee_audio', enabled.toString());
        }
    };

    // Keyboard Controls
    const Keyboard = {
        init() {
            document.addEventListener('keydown', (e) => {
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
                
                switch (e.key.toLowerCase()) {
                    case ' ':
                    case 'enter':
                        e.preventDefault();
                        if (GameState.gameRunning && !GameState.paused) {
                            this.hitNearestCup();
                        } else if (elements.homeScreen.classList.contains('active')) {
                            document.getElementById('play-btn').click();
                        }
                        break;
                    case 'm':
                        elements.muteBtn.click();
                        break;
                    case 'p':
                    case 'escape':
                        if (GameState.gameRunning) {
                            if (GameState.paused) {
                                UI.resumeGame();
                            } else {
                                UI.pauseGame();
                            }
                        }
                        break;
                }
            });
        },
        
        hitNearestCup() {
            const cups = Array.from(Spawner.activeCups);
            if (cups.length === 0) return;
            
            // Find cup closest to center of screen
            const arenaRect = elements.arena.getBoundingClientRect();
            const centerX = arenaRect.left + arenaRect.width / 2;
            const centerY = arenaRect.top + arenaRect.height / 2;
            
            let nearestCup = null;
            let minDistance = Infinity;
            
            cups.forEach(cup => {
                const rect = cup.getBoundingClientRect();
                const cupX = rect.left + rect.width / 2;
                const cupY = rect.top + rect.height / 2;
                const distance = Math.sqrt((cupX - centerX) ** 2 + (cupY - centerY) ** 2);
                
                if (distance < minDistance) {
                    minDistance = distance;
                    nearestCup = cup;
                }
            });
            
            if (nearestCup) {
                nearestCup.click();
            }
        }
    };

    // Storage Manager
    const Storage = {
        load() {
            const audio = localStorage.getItem('catchCoffee_audio') !== 'false';
            UI.setAudio(audio);
        }
    };

    // Event Listeners
    function initEventListeners() {
        // Main buttons
        document.getElementById('play-btn').addEventListener('click', () => {
            UI.startGame();
        });
        
        
        // Game controls
        elements.muteBtn.addEventListener('click', () => {
            UI.setAudio(!GameState.audioEnabled);
        });
        
        elements.pauseBtn.addEventListener('click', () => {
            if (GameState.paused) {
                UI.resumeGame();
            } else {
                UI.pauseGame();
            }
        });
        
        elements.resumeBtn.addEventListener('click', () => {
            UI.resumeGame();
        });
        
        elements.homeBtn.addEventListener('click', () => {
            UI.endGame();
        });
        
        // Game over buttons
        elements.playAgainBtn.addEventListener('click', () => {
            UI.startGame();
        });
        
        elements.homeFromGameoverBtn.addEventListener('click', () => {
            UI.endGame();
        });
        
        
        // Window focus/blur for pause
        window.addEventListener('blur', () => {
            if (GameState.gameRunning && !GameState.paused) {
                UI.pauseGame();
            }
        });
        
        // Prevent context menu on arena
        elements.arena.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }

    // Initialize game
    function init() {
        Audio.init();
        Keyboard.init();
        Storage.load();
        initEventListeners();
        
        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            UI.setReducedMotion(true);
        }
        
        console.log('☕ Catch the Coffee initialized!');
    }

    // Start the game when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose for debugging
    window.CatchTheCoffee = {
        GameState,
        UI,
        Spawner,
        Timer,
        Audio
    };

})();
