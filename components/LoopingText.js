"use client"

import { useRef, useEffect } from 'react';

const LoopingText = ({ text, size, velocity, color }) => {
  const myvelocity = velocity;
  const selfRef = useRef(null);
  let repetition = size == 'small' ? 8 : 3;
  let run = size == 'small' ? myvelocity / 4 : myvelocity;
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
      window.addEventListener("scroll", () => lerp.target += speed * 3);
    }
    
    events();

    const animate = () => {

      lerp.target += run;
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
      {[...Array(repetition)].map((_, i) => (
        <div className={`text-strip ${color}`} key={`${i}`} dangerouslySetInnerHTML={{ __html: text }}></div>
      ))}
    </div>
  );

};

export default LoopingText;