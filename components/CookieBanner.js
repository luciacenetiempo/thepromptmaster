"use client";
import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [display, setDisplay] = useState('none');
  const [anonymous, setAnonymous] = useState(true);
  const [gestisci, setGestisci] = useState(false);
  const [rifiuta, setRifiuta] = useState(false);

  useEffect(() => {
    const cookieAccepted = getCookie('CookieAccepted');
    if (cookieAccepted === null || cookieAccepted == 'false' ) {
      setAnonymous(true);
      setDisplay('flex');
    } else if (cookieAccepted === 'true') {
      setDisplay('none');
      setAnonymous(false);
      setGestisci(false);
      setRifiuta(false);
    }
  }, []);

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  };

  const getCookie = (name) => {
    const cookieName = name + '=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  };

  const handleAcconsentoClick = () => {
    setCookie('CookieAccepted', 'true', 365); // Imposta il cookie con durata di 365 giorni
    setAnonymous(false);
    setGestisci(false);
    setRifiuta(false);
    // enableBodyScroll(); // Sblocca lo scroll quando l'utente acconsente
  };

  const handleGestisciClick = () => {
    setAnonymous(false);
    setGestisci(true);
    setRifiuta(false);
  };

  const handleRifiutaClick = () => {
    setCookie('CookieAccepted', 'false', 365); // Imposta il cookie con durata di 365 giorni
    setAnonymous(false);
    setGestisci(false);
    setRifiuta(true);
  };

  const handleCloseClick = () => {
    setCookie('CookieAccepted', 'true', 365); // Imposta il cookie con durata di 365 giorni
    setAnonymous(false);
    setGestisci(false);
    setRifiuta(false);
    // enableBodyScroll(); // Sblocca lo scroll quando l'utente chiude il banner
  };

  // Funzione per bloccare lo scroll del corpo della pagina
  const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  // Funzione per sbloccare lo scroll del corpo della pagina
  const enableBodyScroll = () => {
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {anonymous && (
        <div className='cookie-banner-overlay' style={{display: display}}>
          <div className='cookie-banner'>
            <div className='close-banner' onClick={handleCloseClick}>X</div>
            <div className='cookie-banner--row'>
              <p>Utilizziamo i cookies al fine di raccogliere ed utilizzare dati come dichiarato nell’<a href="/privacy">informativa sulla privacy</a>. L’informativa sui <a href="/cookie">cookies</a> fornisce informazioni dettagliate su come e quando li utilizziamo.</p>
            </div>
            <div className='cookie-banner--row'>
              <button role="button" className='button buttonAcconsento' onClick={handleAcconsentoClick}>Acconsento</button>
              <button role="button" className='button buttonGestisci' onClick={handleGestisciClick}>Gestisci</button>
            </div>
          </div>
        </div>
      )}
      {gestisci && (
        <div className='cookie-banner-overlay' style={{display: display}}>
          <div className='cookie-banner'>
            <div className='close-banner' onClick={handleCloseClick}>X</div>
            <div className='cookie-banner--row'>
              <p>La piattaforma ThePromptMaster, il sito e tutti i nostri servizi ritengono i cookies elencati nell’informativa essenziali per il funzionamento del sito, per permettere all’utente di ricevere un servizio adeguato in merito alle sue finalità, e fornire a al sito web un servizio qualitativo. Se non accetti non potrai accedere ad alcuna funzionalità del sito. Chiudendo questo banner dichiari di accettare.</p>
            </div>
            <div className='cookie-banner--row'>
              <button role="button" className='button buttonAcconsento' onClick={handleAcconsentoClick}>Acconsento</button>
              <butto role="button"n className='button buttonRifiuta' onClick={handleRifiutaClick}>Rifiuta</butto>
            </div>
          </div>
        </div>
      )}
      {rifiuta && (
        <div className='cookie-banner-overlay' style={{display: display}}>
          <div className='cookie-banner'>
            <div className='close-banner' onClick={handleCloseClick}>X</div>
            <div className='cookie-banner--row'>
              <p>Se non accetti i cookies non potrai accedere ad alcuna funzionalità del sito. Chiudendo questo banner o cliccando su Accetta, dichiari di accettare i cookies presenti, pertanto potrai accedere a tutte le funzionalità del sito.</p>
            </div>
            <div className='cookie-banner--row'>
              <button role="button" className='button buttonAcconsento' onClick={handleAcconsentoClick}>Acconsento</button>
              <button role="button" className='button buttonGestisci' onClick={handleGestisciClick}>Indietro</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
