// ─── PROOF PAGE ───────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { C, F, DEPLOYMENTS } from '../../data';
import SectionLabel from '../../components/SectionLabel';
import Reveal from '../../components/Reveal';
import MarqueeStrip from '../../components/MarqueeStrip';

export default function ProofPage(){
  const [filter,setFilter]=useState("All");
  const cats=["All","Education","Health","Water","Nutrition"];
  const catColors={Education:"#1a5c32",Health:"#9b2c2c",Water:"#1a4f7a",Nutrition:"#7c4a0e"};
  const shown=filter==="All"?DEPLOYMENTS:DEPLOYMENTS.filter(d=>d.cat===filter);

  return(
    <>
      <section style={{paddingTop:120,paddingBottom:72,padding:"120px 24px 72px",background:"linear-gradient(160deg,#080a07,#0f1a0e)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <SectionLabel light>Public ledger</SectionLabel>
          <h1 style={{fontFamily:F.display,fontSize:"clamp(40px,5.5vw,64px)",fontWeight:600,lineHeight:1.06,letterSpacing:"-0.025em",marginBottom:20}}>
            <span style={{color:C.mist,display:"block"}}>Every rupee.</span>
            <span style={{color:"rgba(242,239,232,0.25)",fontStyle:"italic",fontWeight:400,display:"block"}}>Accounted for.</span>
          </h1>
          <p style={{fontFamily:F.body,fontSize:15,color:"rgba(242,239,232,0.38)",lineHeight:1.8,maxWidth:480,fontWeight:300,marginBottom:40}}>Two-stage proof: transfer confirmed day 1, impact documented within 7 days. Always public. Never edited.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:1,background:"rgba(26,92,50,0.25)",maxWidth:480}}>
            {[{v:"₹2,41,600",l:"Total collected"},{v:"18/18",l:"Proof published"},{v:"5.2 days",l:"Avg proof time"}].map(s=>(
              <div key={s.l} style={{padding:"18px 16px",textAlign:"center",background:"rgba(26,92,50,0.1)"}}>
                <div style={{fontFamily:F.display,fontSize:22,fontWeight:600,color:C.mist,marginBottom:4}}>{s.v}</div>
                <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(242,239,232,0.28)"}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip/>

      <section style={{padding:"56px 24px",background:C.ink}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          {/* Filter pills */}
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:36}}>
            {cats.map(c=>(
              <button key={c} onClick={()=>setFilter(c)} style={{fontFamily:F.mono,fontSize:10,textTransform:"uppercase",letterSpacing:"0.13em",padding:"8px 16px",borderRadius:99,cursor:"pointer",transition:"all .2s",background:filter===c?C.grove:"rgba(242,239,232,0.04)",color:filter===c?C.mist:"rgba(242,239,232,0.35)",border:`1px solid ${filter===c?C.grove:"rgba(242,239,232,0.08)"}`}}>
                {c}
              </button>
            ))}
          </div>

          {/* Deployments grid — responsive */}
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",
            gap:16,
            width:"100%",
            boxSizing:"border-box",
          }}>
            {shown.map((d,i)=>{
              const color=catColors[d.cat]||C.grove;
              return(
                <Reveal key={d.id} delay={i*50}>
                  <div style={{
                    borderRadius:10,padding:24,
                    background:"rgba(242,239,232,0.02)",
                    border:"1px solid rgba(242,239,232,0.07)",
                    borderTop:`2px solid ${color}`,
                    display:"flex",flexDirection:"column",
                    boxSizing:"border-box",
                    width:"100%",
                  }}>
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:12,flexWrap:"wrap",gap:6}}>
                      <span style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",color:"rgba(242,239,232,0.25)"}}>{d.month}</span>
                      <span style={{fontFamily:F.mono,fontSize:9,padding:"3px 8px",borderRadius:99,background:d.status==="complete"?"rgba(26,92,50,0.14)":"rgba(201,146,14,0.1)",color:d.status==="complete"?C.grove3:C.amber}}>
                        {d.status==="complete"?"✓ Complete":"● Collecting"}
                      </span>
                    </div>
                    <div style={{fontFamily:F.display,fontSize:"clamp(26px,2.5vw,32px)",fontWeight:600,color,letterSpacing:"-0.02em",lineHeight:1,marginBottom:6}}>₹{d.amt.toLocaleString("en-IN")}</div>
                    <div style={{fontFamily:F.body,fontSize:13,fontWeight:600,color:C.mist,marginBottom:4}}>{d.ngo}</div>
                    {d.loc&&<div style={{fontFamily:F.mono,fontSize:9,color:"rgba(242,239,232,0.24)",marginBottom:10}}>{d.loc}{d.days?` · Proof in ${d.days} days`:""}</div>}
                    {d.status==="collecting"&&(
                      <div style={{marginBottom:10}}>
                        <div style={{height:3,background:"rgba(242,239,232,0.07)",borderRadius:99,overflow:"hidden"}}>
                          <div style={{height:"100%",width:`${Math.round(d.amt/21000*100)}%`,background:color,borderRadius:99}}/>
                        </div>
                      </div>
                    )}
                    <p style={{fontFamily:F.body,fontSize:12,color:"rgba(242,239,232,0.35)",lineHeight:1.65,fontWeight:300,flex:1,marginBottom:d.status==="complete"?14:0}}>{d.desc}</p>
                    {d.status==="complete"&&(
                      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,paddingTop:14,borderTop:"1px solid rgba(242,239,232,0.06)"}}>
                        {[[d.members,"Members"],[d.reach,"Reach"],[`${d.days}d`,"Proof time"]].map(([val,lbl])=>(
                          <div key={lbl} style={{textAlign:"center"}}>
                            <div style={{fontFamily:F.display,fontSize:14,fontWeight:500,color:C.mist}}>{val}</div>
                            <div style={{fontFamily:F.mono,fontSize:8,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(242,239,232,0.24)",marginTop:2}}>{lbl}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}