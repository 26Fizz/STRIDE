import React from 'react';
import { C, F } from '../data';

export default function SectionLabel({children,light=false}){
  return(
    <div style={{display:"flex",alignItems:"center",gap:10,fontFamily:F.mono,fontSize:10,textTransform:"uppercase",letterSpacing:"0.18em",color:light?"rgba(242,239,232,0.28)":C.grove,marginBottom:18}}>
      <span style={{display:"block",width:28,height:1,background:light?"rgba(242,239,232,0.18)":C.grove,flexShrink:0}}/>
      {children}
    </div>
  );
}
