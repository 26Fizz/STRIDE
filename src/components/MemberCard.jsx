// ─── MEMBER CARD ──────────────────────────────────────────────────────────────


import React, { useState, useEffect } from 'react';
import { C, F } from '../data';

export default function MemberCard(){
  const [pool,setPool]=useState(14280);
  const [flash,setFlash]=useState(false);
  const [lastJoined,setLastJoined]=useState("");
  const names=["Rahul K.","Ananya S.","Vikram P.","Nisha R.","Arjun T.","Meera D."];
  const pct=Math.min((pool/21000)*100,100);

  useEffect(()=>{
    const intervals=[4200,6800,3900,5500,7100,4600];
    let i=0;
    const tick=()=>{
      setPool(p=>p+10);
      setLastJoined(names[Math.floor(Math.random()*names.length)]);
      setFlash(true);
      setTimeout(()=>setFlash(false),800);
      i=(i+1)%intervals.length;
      setTimeout(tick,intervals[i]);
    };
    const id=setTimeout(tick,intervals[0]);
    return()=>clearTimeout(id);
  },[]);

  return(
    <div className="anim-drift" style={{position:"relative",width:296,borderRadius:18,overflow:"hidden",background:"linear-gradient(135deg,#1a2018,#0f1a0e)",boxShadow:"0 32px 80px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.06),inset 0 1px 0 rgba(255,255,255,.08)"}}>
      <div style={{height:1,background:"linear-gradient(90deg,transparent,#1a5c32,transparent)",opacity:.7}}/>
      <div style={{padding:24}}>
        {/* Header */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:18}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:4}}>
              <span style={{position:"relative",display:"flex",width:8,height:8}}>
                <span className="anim-ripple" style={{position:"absolute",inset:0,borderRadius:"50%",background:C.live,opacity:.6}}/>
                <span className="anim-blink" style={{position:"relative",display:"block",width:8,height:8,borderRadius:"50%",background:C.live}}/>
              </span>
              <span style={{fontFamily:F.mono,fontSize:9,color:"rgba(34,197,94,0.75)",textTransform:"uppercase",letterSpacing:"0.15em"}}>Live · March 2025</span>
            </div>
            <span style={{fontFamily:F.mono,fontSize:9,color:"rgba(242,239,232,0.25)",textTransform:"uppercase",letterSpacing:"0.12em"}}>Education</span>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontFamily:F.mono,fontSize:9,color:"rgba(242,239,232,0.22)",textTransform:"uppercase"}}>Target</div>
            <div style={{fontFamily:F.mono,fontSize:11,color:"rgba(242,239,232,0.38)"}}>₹21,000</div>
          </div>
        </div>
        {/* Amount */}
        <div style={{fontFamily:F.display,fontSize:44,fontWeight:600,letterSpacing:"-0.02em",lineHeight:1,color:flash?C.live:C.mist,transition:"color .4s ease",marginBottom:4}}>
          ₹{pool.toLocaleString("en-IN")}
        </div>
        <div style={{fontFamily:F.body,fontSize:12,color:"rgba(242,239,232,0.32)",marginBottom:18}}>pooled by 357 members</div>
        {/* Progress */}
        <div style={{height:3,background:"rgba(242,239,232,0.07)",borderRadius:99,overflow:"hidden",marginBottom:6}}>
          <div style={{height:"100%",width:`${pct}%`,background:"linear-gradient(90deg,#1a5c32,#2c8048)",borderRadius:99,transition:"width .6s ease"}}/>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:18}}>
          <span style={{fontFamily:F.mono,fontSize:9,color:"rgba(242,239,232,0.22)"}}>{Math.round(pct)}% of target</span>
          <span style={{fontFamily:F.mono,fontSize:9,color:"rgba(26,92,50,0.7)"}}>Deploys Apr 1</span>
        </div>
        {/* Week dots */}
        <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:18}}>
          {[1,2,3,4,5].map(i=>(
            <div key={i} style={{width:i<=4?8:6,height:i<=4?8:6,borderRadius:"50%",background:i<=4?"#1a5c32":"rgba(242,239,232,0.1)",transition:"all .3s"}}/>
          ))}
          <span style={{fontFamily:F.mono,fontSize:9,color:"rgba(242,239,232,0.22)",marginLeft:4}}>Week 4 of 5</span>
        </div>
        <div style={{height:1,background:"rgba(242,239,232,0.06)",marginBottom:14}}/>
        {/* Footer */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{display:"flex"}}>
            {["PM","RK","AS","NJ"].map((init,i)=>(
              <div key={init} style={{width:24,height:24,borderRadius:"50%",background:"rgba(26,92,50,0.3)",border:"1.5px solid rgba(26,92,50,0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:F.mono,fontSize:8,color:C.grove,marginLeft:i>0?-8:0,zIndex:4-i}}>
                {init}
              </div>
            ))}
            <div style={{width:24,height:24,borderRadius:"50%",background:"rgba(242,239,232,0.05)",border:"1.5px solid rgba(242,239,232,0.08)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:F.mono,fontSize:8,color:"rgba(242,239,232,0.3)",marginLeft:-8}}>
              +353
            </div>
          </div>
          {flash&&lastJoined&&(
            <span className="anim-fadein" style={{fontFamily:F.mono,fontSize:9,color:C.grove}}>↑ {lastJoined} joined</span>
          )}
        </div>
      </div>
    </div>
  );
}