
import React, { useState } from 'react';
import { C, F } from '../data';

export default function FAQItem({q,a}){
  const [open,setOpen]=useState(false);
  return(
    <div style={{borderBottom:"1px solid rgba(242,239,232,0.07)"}}>
      <button onClick={()=>setOpen(!open)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px 0",background:"none",border:"none",cursor:"pointer",textAlign:"left",gap:16}}>
        <span style={{fontFamily:F.body,fontSize:15,fontWeight:500,color:C.mist,flex:1,lineHeight:1.4}}>{q}</span>
        <span style={{fontFamily:F.display,fontSize:24,color:C.grove,flexShrink:0,transform:open?"rotate(45deg)":"none",transition:"transform .25s ease",lineHeight:1}}>+</span>
      </button>
      <div style={{maxHeight:open?300:0,overflow:"hidden",transition:"max-height .4s cubic-bezier(.22,1,.36,1)"}}>
        <p style={{fontFamily:F.body,fontSize:13,color:"rgba(242,239,232,0.45)",lineHeight:1.8,paddingBottom:18,fontWeight:300}}>{a}</p>
      </div>
    </div>
  );
}