// ─── HOME PAGE ────────────────────────────────────────────────────────────────

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F, DEPLOYMENTS, CAUSES, WEEKLY_RHYTHM } from '../../data';
import { useReveal } from '../../hooks/useReveal';
import { useCounter } from '../../hooks/useCounter';
import SectionLabel from '../../components/SectionLabel';
import Reveal from '../../components/Reveal';
import MarqueeStrip from '../../components/MarqueeStrip';
import MemberCard from '../../components/MemberCard';

function Hero({setPage}){
  const [phase,setPhase]=useState(0);
  const [pool,setPool]=useState(14280);
  const [poolFlash,setPoolFlash]=useState(false);
  const [isMobile,setIsMobile]=useState(window.innerWidth<=768);

  useEffect(()=>{
    const onResize=()=>setIsMobile(window.innerWidth<=768);
    window.addEventListener("resize",onResize);
    return()=>window.removeEventListener("resize",onResize);
  },[]);

  useEffect(()=>{
    const timings=[80,500,950,1400,1800,2200];
    const timers=timings.map((t,i)=>setTimeout(()=>setPhase(i+1),t));
    const intervals=[4200,6800,3900,5500,7100,4600];
    let idx=0;
    const tick=()=>{
      setPool(p=>p+10);
      setPoolFlash(true);
      setTimeout(()=>setPoolFlash(false),700);
      idx=(idx+1)%intervals.length;
      setTimeout(tick,intervals[idx]);
    };
    const pt=setTimeout(tick,intervals[0]);
    return()=>{timers.forEach(clearTimeout);clearTimeout(pt);};
  },[]);

  const fade=(p,dy=16)=>({
    opacity:phase>=p?1:0,
    transform:phase>=p?"translateY(0)":"translateY("+dy+"px)",
    transition:"opacity .85s cubic-bezier(.22,1,.36,1), transform .85s cubic-bezier(.22,1,.36,1)",
  });

  const mob=isMobile;

  return(
    <section style={{
      minHeight:"100svh",
      background:"#0b0c0a",
      display:"flex",flexDirection:"column",
      justifyContent:"center",
      position:"relative",overflow:"hidden",
    }}>

      {/* Grain */}
      <div style={{position:"absolute",inset:0,opacity:.032,pointerEvents:"none",
        backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize:"160px 160px",
      }}/>

      {/* Green glow */}
      <div style={{
        position:"absolute",bottom:"-20%",left:"-10%",
        width:"50vw",height:"50vw",borderRadius:"50%",
        background:"radial-gradient(circle,rgba(26,92,50,0.07) 0%,transparent 70%)",
        pointerEvents:"none",
      }}/>

      {/* ── LAYOUT ── */}
      <div style={{
        position:"relative",width:"100%",maxWidth:1140,margin:"0 auto",
        padding:mob?"88px 24px 64px":"108px 64px 80px",
        display:"flex",
        flexDirection:mob?"column":"row",
        alignItems:"center",
        gap:mob?0:56,
        justifyContent:"space-between",
      }}>

        {/* ── COPY COLUMN ── */}
        <div style={{
          flex:"1 1 0",minWidth:0,
          width:"100%",
          textAlign:mob?"center":"left",
          maxWidth:mob?"100%":600,
        }}>

          {/* 1 — Live badge */}
          <div style={{...fade(1),marginBottom:mob?24:36,display:"flex",justifyContent:mob?"center":"flex-start"}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:8}}>
              <span style={{position:"relative",display:"flex",width:6,height:6,flexShrink:0}}>
                <span className="anim-ripple" style={{position:"absolute",inset:0,borderRadius:"50%",background:C.live,opacity:.55}}/>
                <span style={{position:"relative",width:6,height:6,borderRadius:"50%",background:C.live,display:"block"}}/>
              </span>
              <span style={{
                fontFamily:F.mono,fontSize:mob?9:11,
                color:"rgba(34,197,94,0.5)",
                letterSpacing:"0.18em",textTransform:"uppercase",
              }}>357 members · March 2025 · live</span>
            </div>
          </div>

          {/* 2 — Headline */}
          <div style={{...fade(2),marginBottom:mob?10:14}}>
            <h1 style={{
              fontFamily:F.display,
              fontSize:mob?"clamp(32px,9vw,48px)":"clamp(34px,4.2vw,62px)",
              fontWeight:600,lineHeight:1.06,
              letterSpacing:"-0.025em",
              margin:0,color:C.mist,
            }}>
              One-time charity is a<br/>
              transaction with your<br/>
              <span style={{fontStyle:"italic",fontWeight:400,color:"rgba(242,239,232,0.38)"}}>conscience.</span>
            </h1>
          </div>

          {/* 3 — Pivot */}
          <div style={{...fade(3),marginBottom:mob?18:24}}>
            <h2 style={{
              fontFamily:F.display,
              fontSize:mob?"clamp(32px,9vw,48px)":"clamp(34px,4.2vw,62px)",
              fontWeight:600,lineHeight:1.06,
              letterSpacing:"-0.025em",
              margin:0,fontStyle:"italic",
            }}>
              <span style={{color:"rgba(242,239,232,0.5)"}}>Stride is a transaction<br/>with </span>
              <span style={{color:C.grove,fontWeight:700,textShadow:"0 0 60px rgba(26,92,50,0.35)"}}>reality.</span>
            </h2>
          </div>

          {/* 4 — Identity */}
          <div style={{...fade(4),marginBottom:mob?16:22}}>
            <p style={{
              fontFamily:F.display,
              fontSize:mob?"clamp(18px,5.5vw,26px)":"clamp(20px,2vw,30px)",
              fontWeight:500,lineHeight:1.15,
              letterSpacing:"-0.018em",margin:0,
              color:"rgba(242,239,232,0.7)",
            }}>
              A new{" "}
              <span style={{color:C.grove,fontStyle:"italic",fontWeight:700}}>India</span>
              {" "}begins with{" "}
              <span style={{color:C.mist,borderBottom:"2px solid "+C.grove,paddingBottom:2}}>you.</span>
            </p>
          </div>

          {/* 5 — Proof stamp */}
          <div style={{...fade(4),marginBottom:mob?32:44,display:"flex",justifyContent:mob?"center":"flex-start"}}>
            <span style={{
              fontFamily:F.mono,fontSize:mob?9:10,
              color:"rgba(242,239,232,0.35)",letterSpacing:"0.08em",
              lineHeight:1.6,display:"block",textAlign:mob?"center":"left",
            }}>
              {mob
                ?"460 people · ₹18,400 · 38 children\nFeb 2025 · proof in 6 days"
                :"460 people · ₹18,400 · 38 children · Feb 2025 · proof in 6 days"
              }
            </span>
          </div>

          {/* 6 — CTA */}
          <div style={{...fade(5),display:"flex",flexDirection:"column",alignItems:mob?"center":"flex-start"}}>
            <div style={{
              fontFamily:F.mono,fontSize:mob?8:9,
              color:"rgba(242,239,232,0.45)",
              textTransform:"uppercase",letterSpacing:"0.22em",
              marginBottom:12,
            }}>make it real.</div>

            <button
              onClick={()=>setPage("join")}
              style={{
                display:"inline-block",
                fontFamily:F.display,
                fontSize:mob?"clamp(18px,5vw,24px)":"clamp(18px,1.8vw,26px)",
                fontWeight:500,fontStyle:"italic",
                color:C.mist,background:"none",border:"none",
                borderBottom:"2px solid "+C.grove,
                paddingBottom:5,cursor:"pointer",
                letterSpacing:"-0.01em",lineHeight:1.2,
                transition:"color .2s",textAlign:"left",
              }}
              onMouseEnter={e=>e.currentTarget.style.color=C.grove}
              onMouseLeave={e=>e.currentTarget.style.color=C.mist}
            >
              Promise yourself. ₹10 this Monday →
            </button>

            <div style={{
              display:"flex",alignItems:"center",
              gap:mob?12:20,marginTop:16,flexWrap:"wrap",
              justifyContent:mob?"center":"flex-start",
            }}>
              <button
                onClick={()=>setPage("proof")}
                style={{
                  fontFamily:F.mono,fontSize:mob?8:9,
                  background:"none",border:"none",cursor:"pointer",
                  color:"rgba(242,239,232,0.22)",
                  letterSpacing:"0.15em",textTransform:"uppercase",
                  borderBottom:"1px solid rgba(242,239,232,0.1)",
                  paddingBottom:1,transition:"all .2s",
                }}
                onMouseEnter={e=>{e.currentTarget.style.color="rgba(242,239,232,0.6)";e.currentTarget.style.borderColor="rgba(242,239,232,0.3)"}}
                onMouseLeave={e=>{e.currentTarget.style.color="rgba(242,239,232,0.22)";e.currentTarget.style.borderColor="rgba(242,239,232,0.1)"}}
              >
                See every receipt first
              </button>
              {!mob&&<>
                <div style={{width:1,height:12,background:"rgba(242,239,232,0.08)"}}/>
                {["MSME Reg.","Cancel anytime"].map(t=>(
                  <span key={t} style={{
                    fontFamily:F.mono,fontSize:9,
                    color:"rgba(242,239,232,0.14)",
                    textTransform:"uppercase",letterSpacing:"0.12em",
                    display:"flex",alignItems:"center",gap:4,
                  }}>
                    <span style={{color:"rgba(26,92,50,0.5)"}}>✓</span>{t}
                  </span>
                ))}
              </>}
            </div>
          </div>

        </div>{/* end COPY */}

        {/* ── CARD — desktop only ── */}
        {!mob&&(
          <div style={{
            flexShrink:0,
            display:"flex",flexDirection:"column",alignItems:"center",gap:20,
            opacity:phase>=4?1:0,
            transform:phase>=4?"translateY(0)":"translateY(20px)",
            transition:"opacity 1s ease .3s, transform 1s ease .3s",
          }}>
            <MemberCard/>
            <div style={{textAlign:"center"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:6}}>
                <span style={{position:"relative",display:"flex",width:5,height:5}}>
                  <span className="anim-ripple" style={{position:"absolute",inset:0,borderRadius:"50%",background:C.live,opacity:.5}}/>
                  <span style={{position:"relative",width:5,height:5,borderRadius:"50%",background:C.live,display:"block"}}/>
                </span>
                <span style={{fontFamily:F.mono,fontSize:9,color:"rgba(34,197,94,0.45)",textTransform:"uppercase",letterSpacing:"0.15em"}}>Live pool</span>
              </div>
              <div style={{
                fontFamily:F.display,fontSize:36,fontWeight:700,
                letterSpacing:"-0.025em",lineHeight:1,
                color:poolFlash?C.live:C.mist,transition:"color .35s ease",
              }}>₹{pool.toLocaleString("en-IN")}</div>
              <div style={{fontFamily:F.mono,fontSize:9,color:"rgba(242,239,232,0.18)",marginTop:4,letterSpacing:"0.1em"}}>
                357 members · deploys Apr 1
              </div>
            </div>
          </div>
        )}

      </div>

      <div style={{
        position:"absolute",bottom:0,left:0,right:0,height:60,
        background:"linear-gradient(transparent,rgba(11,12,10,0.5))",
        pointerEvents:"none",
      }}/>

    </section>
  );
}

function StatsBar(){
  const [ref,v]=useReveal();
  const c0=useCounter(241600,1800,v),c1=useCounter(842,1600,v),c2=useCounter(18,1200,v),c3=useCounter(6,1000,v);
  const stats=[
    {d:`₹${(c0/100000).toFixed(1)}L`,l:"Total collected"},
    {d:c1.toLocaleString(),l:"Members"},
    {d:c2,l:"Deployments"},
    {d:c3,l:"NGO Partners"},
    {d:"100%",l:"Proof rate",green:true},
  ];
  return(
    <div ref={ref} style={{background:"#080a07",padding:"32px 40px",borderTop:"1px solid rgba(242,239,232,0.04)",borderBottom:"1px solid rgba(242,239,232,0.04)"}}>
      <div className="grid-stats" style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:16}}>
        {stats.map(s=>(
          <div key={s.l} style={{textAlign:"center"}}>
            <div style={{fontFamily:F.display,fontSize:"clamp(26px,3.5vw,38px)",fontWeight:600,color:s.green?C.grove:C.mist,letterSpacing:"-0.02em",lineHeight:1,marginBottom:6}}>{s.d}</div>
            <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.15em",color:"rgba(242,239,232,0.24)"}}>{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhatStrideIs({setPage}){
  const [ref,v]=useReveal();
  return(
    <section ref={ref} style={{padding:"88px 40px",background:C.ink}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        {/* Manifesto block */}
        <div className="reveal" style={{...(v?{opacity:1,transform:"none"}:{opacity:0,transform:"translateY(24px)"}),transitionDelay:"0ms",marginBottom:72}}>
          <SectionLabel light>The honest truth</SectionLabel>
          <div style={{fontFamily:F.display,fontStyle:"italic",lineHeight:1.18,letterSpacing:"-0.01em",maxWidth:900,fontSize:"clamp(24px,3.8vw,48px)"}}>
            <span style={{color:"rgba(242,239,232,0.18)"}}>That ₹500 at the signal — you don't know where it went. </span>
            <span style={{color:"rgba(242,239,232,0.18)"}}>That birthday fundraiser — you never saw proof. </span>
            <span style={{color:"rgba(242,239,232,0.42)"}}>That one time you donated online — you felt good for a day. </span>
            <span style={{color:"rgba(242,239,232,0.65)"}}>None of it was wrong. </span>
            <span style={{color:C.mist}}>But none of it was enough.</span>
          </div>
          <div style={{height:1,maxWidth:240,marginTop:28,background:"linear-gradient(90deg,#1a5c32,transparent)"}}/>
        </div>
        {/* Two col */}
        <div className="grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"start"}}>
          <div className="reveal" style={{...(v?{opacity:1,transform:"none"}:{opacity:0,transform:"translateY(24px)"}),transitionDelay:"100ms"}}>
            <h2 style={{fontFamily:F.display,fontSize:"clamp(28px,3.5vw,44px)",fontWeight:600,lineHeight:1.1,letterSpacing:"-0.02em",marginBottom:20}}>
              <span style={{color:C.mist,display:"block"}}>Done donating.</span>
              <span style={{color:C.grove,fontStyle:"italic",fontWeight:500,display:"block"}}>Start Striding.</span>
            </h2>
            <p style={{fontFamily:F.body,fontSize:15,color:"rgba(242,239,232,0.42)",lineHeight:1.85,marginBottom:16,fontWeight:300}}>Stride is a promise to yourself. ₹10 every Monday. Automatically. To a verified NGO. With published proof within 7 days.</p>
            <p style={{fontFamily:F.body,fontSize:15,color:"rgba(242,239,232,0.42)",lineHeight:1.85,marginBottom:28,fontWeight:300}}>Not once. Not when you remember. Not when you feel guilty enough. Every week. Without thinking about it. That's what consistency looks like. That's what actually changes things.</p>
            <button onClick={()=>setPage("how")} style={{background:"none",border:"none",cursor:"pointer",fontFamily:F.body,fontSize:13,fontWeight:500,color:"rgba(242,239,232,0.38)",borderBottom:"1px solid rgba(242,239,232,0.14)",paddingBottom:2,transition:"all .2s"}}
              onMouseEnter={e=>{e.currentTarget.style.color=C.mist;e.currentTarget.style.borderColor="rgba(242,239,232,0.4)"}}
              onMouseLeave={e=>{e.currentTarget.style.color="rgba(242,239,232,0.38)";e.currentTarget.style.borderColor="rgba(242,239,232,0.14)"}}>
              See exactly how it works →
            </button>
          </div>
          <div className="reveal" style={{...(v?{opacity:1,transform:"none"}:{opacity:0,transform:"translateY(24px)"}),transitionDelay:"180ms",display:"flex",flexDirection:"column",gap:10}}>
            {/* Live pool card */}
            <div style={{borderRadius:12,padding:20,background:"rgba(26,92,50,0.1)",border:"1px solid rgba(26,92,50,0.18)"}}>
              <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.14em",color:"rgba(26,92,50,0.6)",marginBottom:10}}>This month · Education</div>
              <div style={{fontFamily:F.display,fontSize:34,fontWeight:600,color:C.mist,letterSpacing:"-0.02em",lineHeight:1,marginBottom:4}}>₹14,280</div>
              <div style={{fontFamily:F.body,fontSize:12,color:"rgba(242,239,232,0.3)",marginBottom:12}}>pooled by 357 members so far</div>
              <div style={{height:2,background:"rgba(242,239,232,0.07)",borderRadius:99,overflow:"hidden",marginBottom:6}}>
                <div style={{height:"100%",width:"68%",background:C.grove,borderRadius:99}}/>
              </div>
              <div style={{display:"flex",justifyContent:"space-between"}}>
                <span style={{fontFamily:F.mono,fontSize:9,color:"rgba(242,239,232,0.22)"}}>68% of target</span>
                <span style={{fontFamily:F.mono,fontSize:9,color:"rgba(26,92,50,0.6)"}}>Deploys Apr 1</span>
              </div>
            </div>
            {/* What ₹10 joins */}
            <div style={{borderRadius:12,padding:20,background:"rgba(242,239,232,0.025)",border:"1px solid rgba(242,239,232,0.07)"}}>
              <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.14em",color:"rgba(242,239,232,0.22)",marginBottom:14}}>What 380 members did last month</div>
              {[["📚","38 children got learning materials in Barmer, Rajasthan"],["🏥","124 patients saw a doctor in Bilaspur who otherwise couldn't"],["💧","340 families got clean water in Ganjam, Odisha"]].map(([icon,text])=>(
                <div key={text} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:10}}>
                  <span style={{fontSize:13,flexShrink:0,marginTop:1}}>{icon}</span>
                  <span style={{fontFamily:F.body,fontSize:12,color:"rgba(242,239,232,0.45)",lineHeight:1.6,fontWeight:300}}>{text}</span>
                </div>
              ))}
            </div>
            {/* Proof guarantee */}
            <div style={{borderRadius:12,padding:"14px 16px",background:"rgba(26,92,50,0.08)",border:"1px solid rgba(26,92,50,0.14)",display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:14}}>✅</span>
              <span style={{fontFamily:F.body,fontSize:12,color:"rgba(26,92,50,0.85)",fontWeight:500,lineHeight:1.55}}>Every deployment above came with published bank proof within 7 days.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WeeklyRhythm({setPage}){
  const [ref,v]=useReveal();
  return(
    <section ref={ref} style={{padding:"88px 40px",background:"#0f1a0e",borderTop:"1px solid rgba(242,239,232,0.04)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <Reveal>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:44,flexWrap:"wrap",gap:16}}>
            <div>
              <SectionLabel>The weekly rhythm</SectionLabel>
              <h2 style={{fontFamily:F.display,fontSize:"clamp(26px,3.5vw,42px)",fontWeight:600,lineHeight:1.1,letterSpacing:"-0.02em"}}>
                <span style={{color:C.mist}}>Four moments. </span>
                <span style={{color:"rgba(242,239,232,0.3)",fontStyle:"italic",fontWeight:400}}>Same time, every week.</span>
              </h2>
            </div>
            <button onClick={()=>setPage("how")} style={{fontFamily:F.body,fontSize:13,fontWeight:500,padding:"11px 20px",borderRadius:6,border:"1px solid rgba(242,239,232,0.1)",background:"none",cursor:"pointer",color:"rgba(242,239,232,0.38)",transition:"all .2s",flexShrink:0}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(242,239,232,0.25)";e.currentTarget.style.color="rgba(242,239,232,0.7)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(242,239,232,0.1)";e.currentTarget.style.color="rgba(242,239,232,0.38)"}}>
              Full walkthrough →
            </button>
          </div>
        </Reveal>
        <div className="grid-4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
          {WEEKLY_RHYTHM.map((r,i)=>(
            <Reveal key={r.day} delay={i*80}>
              <div style={{borderRadius:10,padding:20,background:"rgba(242,239,232,0.02)",border:"1px solid rgba(242,239,232,0.06)",borderTop:`2px solid ${r.color}`,height:"100%"}}>
                <div style={{width:36,height:36,borderRadius:8,background:`${r.color}22`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:F.mono,fontSize:18,color:r.color,marginBottom:14}}>{r.icon}</div>
                <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.14em",color:r.color,marginBottom:8}}>{r.day}</div>
                <div style={{fontFamily:F.display,fontSize:18,fontWeight:600,color:C.mist,marginBottom:8,lineHeight:1.25}}>{r.title}</div>
                <div style={{fontFamily:F.body,fontSize:12,color:"rgba(242,239,232,0.38)",lineHeight:1.65,fontWeight:300}}>{r.copy}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofPreview({setPage}){
  const complete=DEPLOYMENTS.filter(d=>d.status==="complete").slice(0,2);
  return(
    <section style={{padding:"88px 40px",background:C.ink,borderTop:"1px solid rgba(242,239,232,0.04)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <Reveal>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:44,flexWrap:"wrap",gap:16}}>
            <div>
              <SectionLabel light>The proof is public</SectionLabel>
              <h2 style={{fontFamily:F.display,fontSize:"clamp(26px,3.5vw,42px)",fontWeight:600,lineHeight:1.1,letterSpacing:"-0.02em"}}>
                <span style={{color:C.mist,display:"block"}}>We don't ask for trust.</span>
                <span style={{color:C.grove,fontStyle:"italic",fontWeight:500}}>We show you the receipts.</span>
              </h2>
            </div>
            <button onClick={()=>setPage("proof")} style={{fontFamily:F.body,fontSize:13,fontWeight:500,padding:"11px 20px",borderRadius:6,border:"1px solid rgba(242,239,232,0.1)",background:"none",cursor:"pointer",color:"rgba(242,239,232,0.38)",transition:"all .2s",flexShrink:0}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(242,239,232,0.25)";e.currentTarget.style.color="rgba(242,239,232,0.7)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(242,239,232,0.1)";e.currentTarget.style.color="rgba(242,239,232,0.38)"}}>
              All 18 deployments →
            </button>
          </div>
        </Reveal>
        <div className="grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
          {complete.map((d,i)=>(
            <Reveal key={d.id} delay={i*100}>
              <div style={{borderRadius:12,padding:28,background:"rgba(242,239,232,0.02)",border:"1px solid rgba(242,239,232,0.07)"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:16,flexWrap:"wrap",gap:8}}>
                  <span style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(242,239,232,0.25)"}}>{d.month}</span>
                  <span style={{fontFamily:F.mono,fontSize:9,padding:"3px 10px",borderRadius:99,background:"rgba(26,92,50,0.14)",color:C.grove3}}>✓ Proof published</span>
                </div>
                <div style={{fontFamily:F.display,fontSize:"clamp(30px,3vw,40px)",fontWeight:600,color:C.grove,letterSpacing:"-0.02em",lineHeight:1,marginBottom:8}}>₹{d.amt.toLocaleString("en-IN")}</div>
                <div style={{fontFamily:F.body,fontSize:14,fontWeight:600,color:C.mist,marginBottom:4}}>{d.ngo}</div>
                <div style={{fontFamily:F.mono,fontSize:9,color:"rgba(242,239,232,0.24)",marginBottom:16}}>{d.loc} · Proof in {d.days} days</div>
                <div style={{height:1,background:"rgba(242,239,232,0.06)",marginBottom:14}}/>
                <p style={{fontFamily:F.body,fontSize:12,color:"rgba(242,239,232,0.38)",lineHeight:1.65,fontWeight:300}}>{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div style={{borderRadius:10,padding:"14px 20px",background:"rgba(26,92,50,0.08)",border:"1px solid rgba(26,92,50,0.14)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12}}>
            <span style={{fontFamily:F.body,fontSize:13,color:"rgba(26,92,50,0.8)",fontWeight:500}}>📋 18 deployments. 18 proof reports. Every single one, on time.</span>
            <button onClick={()=>setPage("proof")} style={{fontFamily:F.body,fontSize:12,fontWeight:600,padding:"9px 18px",borderRadius:6,border:"1px solid rgba(26,92,50,0.28)",background:"rgba(26,92,50,0.2)",color:C.grove3,cursor:"pointer",transition:"background .2s"}}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(26,92,50,0.35)"}
              onMouseLeave={e=>e.currentTarget.style.background="rgba(26,92,50,0.2)"}>
              See every receipt →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CausesPreview({setPage}){
  return(
    <section style={{padding:"88px 40px",background:"#0a0f09",borderTop:"1px solid rgba(242,239,232,0.04)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <Reveal>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:44,flexWrap:"wrap",gap:16}}>
            <div>
              <SectionLabel light>Four causes</SectionLabel>
              <h2 style={{fontFamily:F.display,fontSize:"clamp(26px,3.5vw,42px)",fontWeight:600,lineHeight:1.1,letterSpacing:"-0.02em"}}>
                <span style={{color:C.mist}}>One cause a month. </span>
                <span style={{color:"rgba(242,239,232,0.3)",fontStyle:"italic",fontWeight:400}}>You always know where you stand.</span>
              </h2>
            </div>
            <button onClick={()=>setPage("causes")} style={{fontFamily:F.body,fontSize:13,fontWeight:500,padding:"11px 20px",borderRadius:6,border:"1px solid rgba(242,239,232,0.1)",background:"none",cursor:"pointer",color:"rgba(242,239,232,0.38)",transition:"all .2s",flexShrink:0}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(242,239,232,0.25)";e.currentTarget.style.color="rgba(242,239,232,0.7)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(242,239,232,0.1)";e.currentTarget.style.color="rgba(242,239,232,0.38)"}}>
              Explore causes →
            </button>
          </div>
        </Reveal>
        <div className="grid-4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
          {CAUSES.map((c,i)=>(
            <Reveal key={c.id} delay={i*70}>
              <div onClick={()=>setPage("causes")} style={{borderRadius:10,padding:20,background:"rgba(242,239,232,0.02)",border:"1px solid rgba(242,239,232,0.06)",borderTop:`2px solid ${c.color}`,cursor:"pointer",height:"100%",display:"flex",flexDirection:"column",transition:"all .2s"}}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(242,239,232,0.04)";e.currentTarget.style.transform="translateY(-2px)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(242,239,232,0.02)";e.currentTarget.style.transform="none"}}>
                <div style={{width:34,height:34,borderRadius:8,background:`${c.color}22`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,marginBottom:12}}>{c.icon}</div>
                <div style={{fontFamily:F.display,fontSize:18,fontWeight:600,color:C.mist,marginBottom:8,lineHeight:1.2}}>{c.name}</div>
                <p style={{fontFamily:F.body,fontSize:11,color:"rgba(242,239,232,0.34)",lineHeight:1.6,fontWeight:300,flex:1,marginBottom:14}}>{c.human}</p>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.1em",color:c.color}}>{c.months}mo funded</span>
                  <span style={{color:c.color,fontSize:14}}>→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeCTA({setPage}){
  return(
    <section style={{padding:"112px 40px",background:"linear-gradient(160deg,#0a0f09,#0d1a0c,#080a07)",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse 60% 50% at 50% 100%,rgba(26,92,50,0.18),transparent 70%)"}}/>
      <div style={{position:"relative",maxWidth:480,margin:"0 auto",textAlign:"center"}}>
        <Reveal>
          <SectionLabel light/>
          <h2 style={{fontFamily:F.display,fontSize:"clamp(38px,5vw,60px)",fontWeight:600,lineHeight:1.08,letterSpacing:"-0.025em",marginBottom:20}}>
            <span style={{color:C.mist,display:"block"}}>842 people are</span>
            <span style={{color:"rgba(242,239,232,0.24)",fontStyle:"italic",fontWeight:400,display:"block"}}>already in.</span>
          </h2>
          <p style={{fontFamily:F.body,fontSize:15,color:"rgba(242,239,232,0.38)",lineHeight:1.82,marginBottom:14,fontWeight:300}}>Students. Homemakers. Working professionals. First-timers to giving. They didn't wait until they earned more. They decided ₹10 was enough to start.</p>
          <p style={{fontFamily:F.body,fontSize:13,color:"rgba(242,239,232,0.22)",lineHeight:1.7,marginBottom:32,fontWeight:300}}>Less than one chai a week. A streak that builds. A receipt every month.</p>
          <div style={{marginBottom:28}}>
            <span style={{fontFamily:F.display,fontSize:"clamp(64px,8vw,88px)",fontWeight:600,color:C.mist,lineHeight:1,letterSpacing:"-0.03em"}}>₹10</span>
            <span style={{fontFamily:F.body,fontSize:16,color:"rgba(242,239,232,0.25)",marginLeft:8}}>/week</span>
          </div>
          <button onClick={()=>setPage("join")} style={{width:"100%",fontFamily:F.body,fontSize:15,fontWeight:600,padding:"18px 40px",borderRadius:8,border:"none",cursor:"pointer",background:C.mist,color:C.ink,marginBottom:16,transition:"all .2s"}}
            onMouseEnter={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 16px 48px rgba(242,239,232,0.14)"}}
            onMouseLeave={e=>{e.currentTarget.style.background=C.mist;e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none"}}>
            I'm done with one-time. Start my streak →
          </button>
          <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.15em",color:"rgba(242,239,232,0.13)"}}>MSME REGISTERED · WEEKLY MEMBERSHIP · CANCEL ANYTIME</div>
        </Reveal>
      </div>
    </section>
  );
}


export default function HomePage(){
  return(
    <>
      <Hero/>
      <MarqueeStrip/>
      <StatsBar/>
      <WhatStrideIs/>
      <WeeklyRhythm/>
      <ProofPreview/>
      <CausesPreview/>
      <HomeCTA/>
    </>
  );
}