// ─── HOW PAGE ─────────────────────────────────────────────────────────────────

import React from 'react';
import { C, F, WEEKLY_RHYTHM, DEPLOY_STEPS, FAQ_DATA } from '../../data';
import SectionLabel from '../../components/SectionLabel';
import Reveal from '../../components/Reveal';
import MarqueeStrip from '../../components/MarqueeStrip';
import FAQItem from '../../components/FAQItem';

export default function HowPage(){
  const timelineRows=[
    ...WEEKLY_RHYTHM.map(r=>({...r,
      copy: r.day==="Monday"
        ?"₹10 leaves quietly. You don't feel it. Somewhere, a pool gets one voice heavier."
        :r.day==="Wednesday"
        ?"Midweek. The pool is visible. You can see exactly how many people showed up."
        :r.copy
    })),
    {day:"Month end",icon:"●",color:"#9b2c2c",title:"Deployment",
      copy:"All membership fees combined. Funds transferred to verified NGO day 1. Proof required within 7 days — photos, report, receipt. Published publicly."},
  ];

  return(
    <>
      {/* ── OPENING ── */}
      <section style={{paddingTop:128,paddingBottom:72,padding:"128px 40px 72px",background:"linear-gradient(160deg,#0b0c0a,#0f1a0e)"}}>
        <div style={{maxWidth:760,margin:"0 auto"}}>
          <Reveal>
            <SectionLabel light>One rule</SectionLabel>
            <h1 style={{
              fontFamily:F.display,
              fontSize:"clamp(32px,4.5vw,58px)",
              fontWeight:600,lineHeight:1.08,
              letterSpacing:"-0.025em",
              margin:"0 0 0 0",
              color:C.mist,
              maxWidth:680,
            }}>
              The whole system runs on one rule —{" "}
              <span style={{color:C.grove,fontStyle:"italic"}}>proof within 7 days</span>
              {" "}or the partnership ends.
            </h1>
          </Reveal>
        </div>
      </section>

      <MarqueeStrip/>

      {/* ── TIMELINE ── */}
      <section style={{padding:"80px 40px",background:C.ink}}>
        <div style={{maxWidth:860,margin:"0 auto"}}>
          <Reveal>
            <SectionLabel light>Weekly cycle</SectionLabel>
            <h2 style={{fontFamily:F.display,fontSize:"clamp(22px,2.8vw,34px)",fontWeight:600,letterSpacing:"-0.02em",marginBottom:56,color:C.mist}}>
              Four moments.{" "}
              <span style={{color:"rgba(242,239,232,0.28)",fontStyle:"italic",fontWeight:400}}>Same time, every week.</span>
            </h2>
          </Reveal>

          <div style={{position:"relative"}}>
            <div style={{
              position:"absolute",
              left:20,top:12,bottom:12,
              width:1,
              background:"linear-gradient(180deg,rgba(26,92,50,0.6),rgba(26,92,50,0.1))",
              pointerEvents:"none",
            }}/>

            {timelineRows.map((row,i)=>(
              <Reveal key={row.day} delay={i*70}>
                <div style={{
                  display:"flex",gap:32,
                  paddingBottom: i<timelineRows.length-1?48:0,
                  position:"relative",
                }}>
                  <div style={{flexShrink:0,width:40,display:"flex",flexDirection:"column",alignItems:"center",paddingTop:4}}>
                    <div style={{
                      width:10,height:10,borderRadius:"50%",
                      background:row.color,
                      boxShadow:`0 0 12px ${row.color}88`,
                      flexShrink:0,zIndex:1,
                      border:"2px solid #0b0c0a",
                    }}/>
                  </div>
                  <div style={{flex:1,paddingBottom:4}}>
                    <div style={{
                      fontFamily:F.mono,fontSize:9,
                      textTransform:"uppercase",letterSpacing:"0.18em",
                      color:row.color,marginBottom:8,
                    }}>{row.day}</div>
                    <div style={{
                      fontFamily:F.display,fontSize:"clamp(18px,2vw,24px)",
                      fontWeight:600,color:C.mist,
                      marginBottom:10,lineHeight:1.2,
                    }}>{row.title}</div>
                    <p style={{
                      fontFamily:F.body,fontSize:13,
                      color:"rgba(242,239,232,0.42)",
                      lineHeight:1.78,fontWeight:300,
                      maxWidth:540,margin:0,
                    }}>{row.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPLOYMENT FLOW ── */}
      <section style={{padding:"80px 40px",background:"#080a07",borderTop:"1px solid rgba(242,239,232,0.04)"}}>
        <div style={{maxWidth:1060,margin:"0 auto"}}>
          <Reveal>
            <SectionLabel light>Monthly deployment</SectionLabel>
            <h2 style={{fontFamily:F.display,fontSize:"clamp(22px,2.8vw,34px)",fontWeight:600,letterSpacing:"-0.02em",color:C.mist,marginBottom:56}}>
              How the money{" "}
              <span style={{color:"rgba(242,239,232,0.28)",fontStyle:"italic",fontWeight:400}}>actually moves.</span>
            </h2>
          </Reveal>

          <div style={{display:"flex",gap:0,alignItems:"stretch",flexWrap:"wrap"}}>
            {DEPLOY_STEPS.map((s,i)=>(
              <Reveal key={s.n} delay={i*80}>
                <div style={{
                  flex:"1 1 200px",
                  padding:"32px 28px",
                  background:"rgba(242,239,232,0.015)",
                  border:"1px solid rgba(242,239,232,0.06)",
                  borderLeft: i===0?"1px solid rgba(242,239,232,0.06)":"none",
                  position:"relative",
                  minWidth:180,
                }}>
                  <div style={{
                    fontFamily:F.display,fontSize:80,fontWeight:700,
                    color:"rgba(242,239,232,0.03)",
                    position:"absolute",top:8,right:12,
                    lineHeight:1,pointerEvents:"none",userSelect:"none",
                  }}>{s.n}</div>

                  {i<DEPLOY_STEPS.length-1&&(
                    <div style={{
                      position:"absolute",right:-14,top:"50%",
                      transform:"translateY(-50%)",
                      zIndex:2,
                      fontFamily:F.mono,fontSize:16,
                      color:"rgba(242,239,232,0.12)",
                    }}>→</div>
                  )}

                  <div style={{
                    fontFamily:F.mono,fontSize:9,
                    textTransform:"uppercase",letterSpacing:"0.14em",
                    color: i===2?C.amber:C.grove,
                    marginBottom:14,
                  }}>
                    {s.day}
                    {i===2&&<span style={{marginLeft:8,color:C.amber,fontWeight:600}}>7 days. Not 8.</span>}
                  </div>
                  <div style={{fontFamily:F.display,fontSize:18,fontWeight:600,color:C.mist,marginBottom:8,lineHeight:1.2}}>{s.title}</div>
                  <p style={{fontFamily:F.body,fontSize:12,color:"rgba(242,239,232,0.35)",lineHeight:1.75,fontWeight:300,margin:0}}>{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section style={{padding:"80px 40px",background:"#0a0f09",borderTop:"1px solid rgba(242,239,232,0.04)"}}>
        <div style={{maxWidth:680,margin:"0 auto"}}>
          <Reveal>
            <div style={{
              padding:"40px 44px",
              border:"1px solid rgba(26,92,50,0.2)",
              borderLeft:"3px solid "+C.grove,
              background:"rgba(26,92,50,0.06)",
              borderRadius:2,
            }}>
              <div style={{
                fontFamily:F.display,fontSize:"clamp(22px,2.5vw,30px)",
                fontWeight:600,color:C.mist,
                letterSpacing:"-0.02em",marginBottom:24,
              }}>The guarantee.</div>

              <p style={{fontFamily:F.body,fontSize:14,color:"rgba(242,239,232,0.55)",lineHeight:1.85,fontWeight:300,marginBottom:8}}>
                If proof doesn't arrive within 7 days — every member is notified publicly within 24 hours.
              </p>
              <p style={{fontFamily:F.body,fontSize:14,color:"rgba(242,239,232,0.55)",lineHeight:1.85,fontWeight:300,marginBottom:28}}>
                Two missed deadlines ends the partnership. Permanently.
              </p>

              <div style={{height:1,background:"rgba(26,92,50,0.2)",marginBottom:24}}/>

              <div style={{
                fontFamily:F.display,fontSize:"clamp(16px,1.8vw,20px)",
                fontStyle:"italic",fontWeight:500,
                color:C.grove,letterSpacing:"-0.01em",
              }}>This has never happened.</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{padding:"80px 40px",background:C.ink,borderTop:"1px solid rgba(242,239,232,0.04)"}}>
        <div style={{maxWidth:680,margin:"0 auto"}}>
          <Reveal>
            <SectionLabel light>Common questions</SectionLabel>
          </Reveal>
          <Reveal delay={60}>
            {FAQ_DATA.map((item,i)=><FAQItem key={i} q={item.q} a={item.a}/>)}
          </Reveal>
          <Reveal delay={160}>
            <div style={{marginTop:32,padding:24,borderRadius:12,background:"rgba(242,239,232,0.025)",border:"1px solid rgba(242,239,232,0.07)"}}>
              <div style={{fontFamily:F.display,fontSize:19,fontWeight:600,color:C.mist,marginBottom:8}}>Still have questions?</div>
              <p style={{fontFamily:F.body,fontSize:13,color:"rgba(242,239,232,0.38)",marginBottom:14,fontWeight:300}}>Write to us. We respond within 24 hours and we're real people.</p>
              <span style={{fontFamily:F.body,fontSize:13,fontWeight:500,color:C.grove,borderBottom:`1px solid rgba(26,92,50,0.3)`,paddingBottom:1}}>connect@strideindia.in →</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}