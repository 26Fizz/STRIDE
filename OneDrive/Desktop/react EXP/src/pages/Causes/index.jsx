// ─── CAUSES PAGE ──────────────────────────────────────────────────────────────

import React from 'react';
import { C, F, CAUSES, VERIFY_STEPS } from '../../data';
import SectionLabel from '../../components/SectionLabel';
import Reveal from '../../components/Reveal';
import MarqueeStrip from '../../components/MarqueeStrip';

export default function CausesPage(){
  return(
    <>
      <section style={{paddingTop:120,paddingBottom:72,padding:"120px 40px 72px",background:"linear-gradient(160deg,#0d0d0b,#0a0f09)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <SectionLabel light>Where your ₹10 goes</SectionLabel>
          <h1 style={{fontFamily:F.display,fontSize:"clamp(40px,5.5vw,64px)",fontWeight:600,lineHeight:1.06,letterSpacing:"-0.025em"}}>
            <span style={{color:C.mist,display:"block"}}>Four causes.</span>
            <span style={{color:C.grove,fontStyle:"italic",fontWeight:500,display:"block"}}>One at a time.</span>
          </h1>
        </div>
      </section>
      <MarqueeStrip/>
      <section style={{padding:"56px 40px",background:C.ink}}>
        <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}} className="grid-2">
          {CAUSES.map((c,i)=>(
            <Reveal key={c.id} delay={i*90}>
              <div style={{borderRadius:12,padding:28,background:"rgba(242,239,232,0.02)",border:"1px solid rgba(242,239,232,0.07)",borderTop:`3px solid ${c.color}`,display:"flex",flexDirection:"column"}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:20}}>
                  <div style={{width:48,height:48,borderRadius:12,background:`${c.color}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24}}>{c.icon}</div>
                  <span style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.12em",color:c.color,marginTop:4}}>{c.months} months funded</span>
                </div>
                <h2 style={{fontFamily:F.display,fontSize:26,fontWeight:600,color:C.mist,marginBottom:10}}>{c.name}</h2>
                <p style={{fontFamily:F.body,fontSize:14,color:"rgba(242,239,232,0.42)",lineHeight:1.75,fontWeight:300,marginBottom:16}}>{c.desc}</p>
                <div style={{borderRadius:8,padding:"12px 16px",marginBottom:16,background:`${c.color}12`,border:`1px solid ${c.color}22`}}>
                  <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.1em",color:c.color,marginBottom:4}}>Impact per contribution</div>
                  <p style={{fontFamily:F.body,fontSize:13,color:c.color,fontWeight:500,lineHeight:1.6}}>{c.impact}</p>
                </div>
                <div style={{flex:1}}>
                  <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(242,239,232,0.2)",marginBottom:10}}>NGO Partners</div>
                  {c.ngos.map(n=>(
                    <div key={n} style={{display:"flex",alignItems:"center",gap:8,padding:"8px 0",fontFamily:F.body,fontSize:13,color:"rgba(242,239,232,0.42)",borderBottom:"1px solid rgba(242,239,232,0.05)"}}>
                      <span style={{color:c.color}}>→</span>{n}
                    </div>
                  ))}
                </div>
                <div style={{marginTop:16,paddingTop:14,borderTop:"1px solid rgba(242,239,232,0.06)",fontFamily:F.body,fontSize:13,color:"rgba(242,239,232,0.28)",fontStyle:"italic",fontWeight:300,lineHeight:1.6}}>"{c.human}"</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      {/* Verification */}
      <section style={{padding:"72px 40px",background:"#080a07",borderTop:"1px solid rgba(242,239,232,0.04)"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <Reveal>
            <SectionLabel light>Verification standard</SectionLabel>
            <h2 style={{fontFamily:F.display,fontSize:"clamp(24px,3vw,36px)",fontWeight:600,letterSpacing:"-0.02em",color:C.mist,marginBottom:40}}>
              How we verify <span style={{color:"rgba(242,239,232,0.28)",fontStyle:"italic",fontWeight:400}}>every partner.</span>
            </h2>
          </Reveal>
          <div className="grid-4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}}>
            {VERIFY_STEPS.map((s,i)=>(
              <Reveal key={s.n} delay={i*80}>
                <div style={{paddingLeft:16,borderLeft:`2px solid ${C.grove}`}}>
                  <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.13em",color:"rgba(26,92,50,0.6)",marginBottom:10}}>Step {s.n}</div>
                  <div style={{fontFamily:F.display,fontSize:19,fontWeight:600,color:C.mist,marginBottom:8}}>{s.title}</div>
                  <p style={{fontFamily:F.body,fontSize:12,color:"rgba(242,239,232,0.35)",lineHeight:1.72,fontWeight:300}}>{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}