
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Reveal({children,delay=0}){
  const [ref,v]=useReveal();
  return(
    <div ref={ref} className={`reveal ${v?"reveal-visible":"reveal-hidden"}`} style={{transitionDelay:`${delay}ms`}}>
      {children}
    </div>
  );
}