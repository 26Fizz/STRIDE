
import React from 'react';
import { F } from '../data';

export default function MarqueeStrip(){
  const text="— LIFESTYLE PHILANTHROPY — ₹10/WEEK — VERIFIED NGOs — PROOF IN 7 DAYS — MSME REGISTERED — BEYOND ONE-TIME GIVING — START YOUR STREAK — CONSISTENCY CHANGES INDIA — ".repeat(4);
  return(
    <div style={{overflow:"hidden",padding:"11px 0",background:"#080a07",borderTop:"1px solid rgba(242,239,232,0.04)",borderBottom:"1px solid rgba(242,239,232,0.04)"}}>
      <div className="anim-marquee" style={{display:"flex",whiteSpace:"nowrap"}}>
        {[text,text].map((t,i)=>(
          <span key={i} style={{fontFamily:F.mono,fontSize:10,letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(242,239,232,0.2)",flexShrink:0}}>{t}</span>
        ))}
      </div>
    </div>
  );
}