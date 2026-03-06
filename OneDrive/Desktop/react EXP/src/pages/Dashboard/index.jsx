// ─── DASHBOARD ────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { C, F, CAUSES, DEPLOYMENTS } from '../../data';
import SectionLabel from '../../components/SectionLabel';
import Reveal from '../../components/Reveal';

export default function DashboardPage(){
  const [tab,setTab]=useState("Overview");
  const [notifs,setNotifs]=useState({whatsapp:true,deploy:true,monthly:false});
  const TABS=["Overview","History","Proof Archive","Preferences"];
  const WEEKS=Array.from({length:12},(_,i)=>({
    n:12-i,
    date:["Mar 3","Feb 24","Feb 17","Feb 10","Feb 3","Jan 27","Jan 20","Jan 13","Jan 6","Dec 30","Dec 23","Dec 16"][i],
    year:i<9?"2025":"2024",
    cat:["Education","Health","Water","Nutrition","Education","Health","Education","Water","Nutrition","Education","Health","Water"][i],
    status:i<10?"Deployed":"Pooled",
  }));

  return(
    <section style={{minHeight:"100svh",padding:"104px 40px 64px",background:C.ink}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <Reveal>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:44,flexWrap:"wrap",gap:20}}>
            <div>
              <SectionLabel light>Member dashboard</SectionLabel>
              <h1 style={{fontFamily:F.display,fontSize:"clamp(30px,4vw,48px)",fontWeight:600,lineHeight:1.1,letterSpacing:"-0.025em"}}>
                <span style={{color:C.mist,display:"block"}}>Welcome back,</span>
                <span style={{color:C.grove,fontStyle:"italic",fontWeight:500,display:"block"}}>Rahul Mehta.</span>
              </h1>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{fontFamily:F.display,fontWeight:700,color:C.grove,lineHeight:1,fontSize:"clamp(52px,6vw,68px)"}}>12</div>
              <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.14em",color:"rgba(242,239,232,0.24)"}}>Week streak</div>
            </div>
          </div>
        </Reveal>

        {/* Tabs */}
        <div style={{display:"flex",gap:0,marginBottom:32,borderBottom:"1px solid rgba(242,239,232,0.07)",overflowX:"auto"}}>
          {TABS.map(t=>(
            <button key={t} onClick={()=>setTab(t)} style={{fontFamily:F.mono,fontSize:10,textTransform:"uppercase",letterSpacing:"0.13em",padding:"11px 20px",background:"none",border:"none",borderBottom:`2px solid ${tab===t?C.grove:"transparent"}`,color:tab===t?C.mist:"rgba(242,239,232,0.3)",cursor:"pointer",transition:"all .2s",whiteSpace:"nowrap",flexShrink:0}}>
              {t}
            </button>
          ))}
        </div>

        {tab==="Overview"&&(
          <div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:16}} className="grid-4">
              {[{v:"₹120",l:"Your stride"},{v:"₹108",l:"To the field"},{v:"3",l:"Causes"},{v:"3",l:"Deployments"}].map(s=>(
                <div key={s.l} style={{borderRadius:10,padding:20,background:"rgba(242,239,232,0.02)",border:"1px solid rgba(242,239,232,0.07)"}}>
                  <div style={{fontFamily:F.display,fontSize:30,fontWeight:600,color:C.grove,marginBottom:4}}>{s.v}</div>
                  <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(242,239,232,0.24)"}}>{s.l}</div>
                </div>
              ))}
            </div>
            <div style={{borderRadius:12,padding:24,background:"rgba(26,92,50,0.1)",border:"1px solid rgba(26,92,50,0.2)",marginBottom:16}}>
              <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.13em",color:"rgba(26,92,50,0.5)",marginBottom:8}}>Current pool · March 2025</div>
              <div style={{fontFamily:F.display,fontSize:38,fontWeight:600,color:C.mist,letterSpacing:"-0.02em",lineHeight:1,marginBottom:4}}>₹14,280</div>
              <div style={{fontFamily:F.body,fontSize:13,color:"rgba(242,239,232,0.38)",marginBottom:14}}>357 members · Deploys Apr 1</div>
              <div style={{height:6,background:"rgba(242,239,232,0.07)",borderRadius:99,overflow:"hidden"}}>
                <div style={{height:"100%",width:"68%",background:C.grove,borderRadius:99}}/>
              </div>
            </div>
            <div style={{borderRadius:12,padding:24,background:"rgba(242,239,232,0.02)",border:"1px solid rgba(242,239,232,0.07)"}}>
              <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.14em",color:"rgba(242,239,232,0.24)",marginBottom:18}}>Cause history</div>
              {CAUSES.slice(0,3).map((c,i)=>(
                <div key={c.id} style={{marginBottom:16}}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                    <span style={{fontFamily:F.body,fontSize:13,color:C.mist}}>{c.icon} {c.name}</span>
                    <span style={{fontFamily:F.mono,fontSize:10,color:c.color}}>{[8,5,3][i]} months</span>
                  </div>
                  <div style={{height:3,background:"rgba(242,239,232,0.07)",borderRadius:99,overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${[80,50,30][i]}%`,background:c.color,borderRadius:99}}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab==="History"&&(
          <div style={{borderRadius:12,overflow:"hidden",border:"1px solid rgba(242,239,232,0.07)"}}>
            <table style={{width:"100%",borderCollapse:"collapse"}}>
              <thead>
                <tr style={{background:"rgba(242,239,232,0.03)"}}>
                  {["Week","Date","Category","Status","Amount"].map(h=>(
                    <th key={h} style={{textAlign:"left",padding:"12px 16px",fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.13em",color:"rgba(242,239,232,0.24)",borderBottom:"1px solid rgba(242,239,232,0.07)"}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {WEEKS.map((w,i)=>(
                  <tr key={i} style={{borderBottom:"1px solid rgba(242,239,232,0.04)"}}>
                    <td style={{padding:"11px 16px",fontFamily:F.mono,fontSize:11,color:C.grove,fontWeight:500}}>#{w.n}</td>
                    <td style={{padding:"11px 16px",fontFamily:F.body,fontSize:12,color:"rgba(242,239,232,0.38)"}}>{w.date}, {w.year}</td>
                    <td style={{padding:"11px 16px",fontFamily:F.body,fontSize:12,color:C.mist}}>{w.cat}</td>
                    <td style={{padding:"11px 16px"}}>
                      <span style={{fontFamily:F.mono,fontSize:9,padding:"3px 8px",borderRadius:99,background:w.status==="Deployed"?"rgba(26,92,50,0.14)":"rgba(201,146,14,0.1)",color:w.status==="Deployed"?C.grove3:C.amber}}>
                        {w.status}
                      </span>
                    </td>
                    <td style={{padding:"11px 16px",fontFamily:F.display,fontSize:14,fontWeight:500,color:C.mist}}>₹10</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab==="Proof Archive"&&(
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {DEPLOYMENTS.filter(d=>d.status==="complete").map((d,i)=>(
              <Reveal key={d.id} delay={i*60}>
                <div style={{borderRadius:12,padding:24,background:"rgba(242,239,232,0.02)",border:"1px solid rgba(242,239,232,0.07)"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10,flexWrap:"wrap",gap:8}}>
                    <div>
                      <span style={{fontFamily:F.display,fontSize:24,fontWeight:600,color:C.grove,letterSpacing:"-0.02em",marginRight:12}}>₹{d.amt.toLocaleString("en-IN")}</span>
                      <span style={{fontFamily:F.body,fontSize:14,fontWeight:600,color:C.mist}}>{d.ngo}</span>
                    </div>
                    <span style={{fontFamily:F.mono,fontSize:9,color:"rgba(242,239,232,0.24)",textTransform:"uppercase",letterSpacing:"0.1em"}}>{d.month}</span>
                  </div>
                  <p style={{fontFamily:F.body,fontSize:13,color:"rgba(242,239,232,0.38)",lineHeight:1.65,fontWeight:300,marginBottom:12}}>{d.desc}</p>
                  <div style={{display:"flex",gap:20,flexWrap:"wrap"}}>
                    {[[d.members+" members","contributed"],[d.reach,"reached"],[d.days+" days","to proof"]].map(([v,l])=>(
                      <div key={l} style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(242,239,232,0.24)"}}>
                        <span style={{color:"rgba(26,92,50,0.7)",fontWeight:500}}>{v}</span> {l}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {tab==="Preferences"&&(
          <div style={{display:"flex",flexDirection:"column",gap:16,maxWidth:460}}>
            <div style={{borderRadius:12,padding:24,background:"rgba(242,239,232,0.02)",border:"1px solid rgba(242,239,232,0.07)"}}>
              <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.14em",color:"rgba(242,239,232,0.24)",marginBottom:18}}>Notifications</div>
              {[{key:"whatsapp",label:"WhatsApp weekly update"},{key:"deploy",label:"Deployment alerts"},{key:"monthly",label:"Monthly report"}].map(n=>(
                <div key={n.key} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:"1px solid rgba(242,239,232,0.05)"}}>
                  <span style={{fontFamily:F.body,fontSize:14,color:"rgba(242,239,232,0.65)"}}>{n.label}</span>
                  <div onClick={()=>setNotifs(p=>({...p,[n.key]:!p[n.key]}))} style={{width:44,height:24,borderRadius:12,background:notifs[n.key]?C.grove:"rgba(242,239,232,0.1)",position:"relative",cursor:"pointer",transition:"background .22s",flexShrink:0}}>
                    <div style={{position:"absolute",top:3,width:18,height:18,borderRadius:"50%",background:C.mist,boxShadow:"0 1px 4px rgba(0,0,0,.3)",left:notifs[n.key]?23:3,transition:"left .22s"}}/>
                  </div>
                </div>
              ))}
            </div>
            <div style={{borderRadius:12,padding:24,background:"rgba(242,239,232,0.02)",border:"1px solid rgba(242,239,232,0.07)"}}>
              <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.14em",color:"rgba(242,239,232,0.24)",marginBottom:16}}>Membership</div>
              <div style={{display:"flex",gap:10}}>
                <button style={{flex:1,fontFamily:F.body,fontSize:13,fontWeight:500,padding:"12px",borderRadius:8,border:"1px solid rgba(242,239,232,0.1)",background:"none",color:"rgba(242,239,232,0.4)",cursor:"pointer",transition:"all .2s"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(242,239,232,0.24)";e.currentTarget.style.color="rgba(242,239,232,0.7)"}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(242,239,232,0.1)";e.currentTarget.style.color="rgba(242,239,232,0.4)"}}>
                  Pause membership
                </button>
                <button style={{flex:1,fontFamily:F.body,fontSize:13,fontWeight:500,padding:"12px",borderRadius:8,border:"1px solid rgba(155,44,44,0.22)",background:"none",color:"rgba(155,44,44,0.6)",cursor:"pointer",transition:"border-color .2s"}}
                  onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(155,44,44,0.45)"}
                  onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(155,44,44,0.22)"}>
                  Cancel membership
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}