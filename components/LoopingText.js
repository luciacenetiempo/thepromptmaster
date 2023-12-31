import { useRef, useEffect } from 'react';

const LoopingText = ({ text, size, velocity, color }) => {
  const myvelocity = velocity;
  const selfRef = useRef(null);

  useEffect(() => {
    const el = selfRef.current;
    selfRef.current = document.querySelector('.strip-block');

    const calculateLerp = (current, target, factor) => current * (1 - factor) + target * factor;

    let lerp = {current: 0, target: 0};
    let interpolationFactor = 0.1; 
    let speed = myvelocity;
    let direction = -1;

    el.style.cssText = `position: relative; display: inline-flex; white-space: nowrap;`;
    el.children[1].style.cssText = `position: absolute; left: ${100 * -direction}%;`;

    const events = () => {
      window.addEventListener("scroll", () => lerp.target += speed * 5);
    }
    
    events();

    const animate = () => {

      lerp.target += speed;
      lerp.current = calculateLerp(lerp.current, lerp.target, interpolationFactor);
      
      if (lerp.target > 100) {
        lerp.current -= lerp.target;
        lerp.target = 0;  
      }

      const x = lerp.current * direction;
      el.style.transform = `translateX(${x}%)`;
      requestAnimationFrame(animate);


    }
    animate();

  }, []);

  return (
    <div className={`strip-block ${'strip-block--'+size}`} ref={selfRef}>
      {[...Array(2)].map((_, i) => (
        <div className={`text-strip ${color}`} key={`${i}`}>{text}</div>
      ))}
    </div>
  );

};

export default LoopingText;