// ─── JOIN PAGE ────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../../data';
import SectionLabel from '../../components/SectionLabel';

export default function JoinPage(){
  const navigate = useNavigate();
  const [step,setStep]=useState(1);
  const [form,setForm]=useState({name:"",whatsapp:"",email:"",cause:"No preference"});
  const [agree,setAgree]=useState(false);
  const [errors,setErrors]=useState({});
  const [focused,setFocused]=useState(null);

  const validate=()=>{
    const e={};
    if(!form.name.trim())e.name="Please enter your name";
    if(!/^\d{10}$/.test(form.whatsapp))e.whatsapp="Enter a valid 10-digit number";
    return e;
  };
  const handleNext=()=>{
    if(step===1){const e=validate();if(Object.keys(e).length){setErrors(e);return;}setErrors({});setStep(2);}
    else if(step===2){if(!agree){setErrors({agree:"Please confirm to continue"});return;}setErrors({});setStep(3);}
  };

  const inp=(name)=>({
    width:"100%",padding:"14px 16px",
    background:"rgba(242,239,232,0.04)",
    border:`1px solid ${focused===name?C.grove:errors[name]?"#9b2c2c":"rgba(242,239,232,0.1)"}`,
    borderRadius:8,color:C.mist,fontSize:14,outline:"none",
    boxShadow:focused===name?"0 0 0 3px rgba(26,92,50,0.1)":"none",
    transition:"border-color .18s, box-shadow .18s",
  });
  const lbl={display:"block",fontFamily:F.mono,fontSize:10,textTransform:"uppercase",letterSpacing:"0.14em",color:"rgba(242,239,232,0.3)",marginBottom:8};

  const linkStyle={
    color:"rgba(242,239,232,0.75)",
    borderBottom:"1px solid rgba(242,239,232,0.3)",
    cursor:"pointer",
    paddingBottom:1,
  };

  return(
    <section style={{minHeight:"100svh",padding:"120px 20px 80px",background:"linear-gradient(160deg,#0d0d0b,#0a0f09)"}}>
      <div style={{maxWidth:440,margin:"0 auto"}}>
        <SectionLabel light>Join the movement</SectionLabel>
        <h1 style={{fontFamily:F.display,fontSize:"clamp(34px,4.5vw,50px)",fontWeight:600,lineHeight:1.1,letterSpacing:"-0.025em",marginBottom:8}}>
          <span style={{color:C.mist,display:"block"}}>₹10 a week.</span>
          <span style={{color:C.grove,fontStyle:"italic",fontWeight:500,display:"block"}}>That's the promise.</span>
        </h1>
        <p style={{fontFamily:F.body,fontSize:14,color:"rgba(242,239,232,0.35)",lineHeight:1.75,marginBottom:36,fontWeight:300}}>Join 842 members already building something real.</p>

        {/* Step dots */}
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:36}}>
          {[1,2,3].map(n=>(
            <div key={n} style={{height:8,borderRadius:99,background:n<=step?C.grove:"rgba(242,239,232,0.1)",width:n===step?32:8,transition:"all .3s ease"}}/>
          ))}
        </div>

        {step===1&&(
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div>
              <label style={lbl}>Full name *</label>
              <input style={inp("name")} value={form.name} placeholder="Your full name" onFocus={()=>setFocused("name")} onBlur={()=>setFocused(null)} onChange={e=>setForm(f=>({...f,name:e.target.value}))}/>
              {errors.name&&<span style={{fontFamily:F.body,fontSize:11,color:"#f87171",marginTop:4,display:"block"}}>{errors.name}</span>}
            </div>
            <div>
              <label style={lbl}>WhatsApp number *</label>
              <input style={inp("whatsapp")} value={form.whatsapp} placeholder="10-digit mobile number" maxLength={10} onFocus={()=>setFocused("whatsapp")} onBlur={()=>setFocused(null)} onChange={e=>setForm(f=>({...f,whatsapp:e.target.value.replace(/\D/g,"")}))}/>
              {errors.whatsapp&&<span style={{fontFamily:F.body,fontSize:11,color:"#f87171",marginTop:4,display:"block"}}>{errors.whatsapp}</span>}
            </div>
            <div>
              <label style={lbl}>Email (optional)</label>
              <input style={inp("email")} value={form.email} type="email" placeholder="your@email.com" onFocus={()=>setFocused("email")} onBlur={()=>setFocused(null)} onChange={e=>setForm(f=>({...f,email:e.target.value}))}/>
            </div>
            <div>
              <label style={lbl}>Preferred cause</label>
              <select style={{...inp("cause"),cursor:"pointer"}} value={form.cause} onFocus={()=>setFocused("cause")} onBlur={()=>setFocused(null)} onChange={e=>setForm(f=>({...f,cause:e.target.value}))}>
                {["No preference","Education","Health","Water","Nutrition"].map(c=><option key={c} style={{background:"#0d0d0b"}}>{c}</option>)}
              </select>
            </div>
            <button onClick={handleNext} style={{width:"100%",fontFamily:F.body,fontSize:14,fontWeight:600,padding:"16px",borderRadius:8,border:"none",cursor:"pointer",background:C.grove,color:C.mist,marginTop:4,transition:"background .2s"}}
              onMouseEnter={e=>e.currentTarget.style.background=C.grove2}
              onMouseLeave={e=>e.currentTarget.style.background=C.grove}>
              Continue →
            </button>
          </div>
        )}

        {step===2&&(
          <div>
            <div style={{borderRadius:12,padding:22,background:"rgba(242,239,232,0.03)",border:"1px solid rgba(242,239,232,0.08)",marginBottom:20}}>
              <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.14em",color:"rgba(242,239,232,0.24)",marginBottom:16}}>Review</div>
              {[["Name",form.name],["WhatsApp",`+91 ${form.whatsapp}`],["Cause",form.cause]].map(([k,v])=>(
                <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px solid rgba(242,239,232,0.06)"}}>
                  <span style={{fontFamily:F.mono,fontSize:10,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(242,239,232,0.24)"}}>{k}</span>
                  <span style={{fontFamily:F.body,fontSize:14,color:C.mist,fontWeight:500}}>{v}</span>
                </div>
              ))}
              <div style={{marginTop:16,paddingTop:12,borderTop:"2px solid rgba(242,239,232,0.06)"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                  <span style={{fontFamily:F.body,fontSize:14,fontWeight:600,color:C.mist}}>Weekly Stride</span>
                  <span style={{fontFamily:F.display,fontSize:18,fontWeight:700,color:C.grove}}>₹10</span>
                </div>
                <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.12em",color:"rgba(242,239,232,0.22)"}}>Billed every Monday · Cancel anytime</div>
              </div>
            </div>

            {/* Checkbox — clean, age confirmation separate */}
            <div style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:4}}>
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={e=>setAgree(e.target.checked)}
                style={{accentColor:C.grove,width:16,height:16,marginTop:3,cursor:"pointer",flexShrink:0}}
              />
              <label htmlFor="agree" style={{fontFamily:F.body,fontSize:13,color:"rgba(242,239,232,0.42)",lineHeight:1.6,fontWeight:300}}>
                I agree to Stride's{" "}
                <span
                  style={linkStyle}
                  onClick={e=>{e.preventDefault();e.stopPropagation();navigate("/terms");}}
                >
                  Terms of Service
                </span>
                {" "}and{" "}
                <span
                  style={linkStyle}
                  onClick={e=>{e.preventDefault();e.stopPropagation();navigate("/privacy");}}
                >
                  Privacy Policy
                </span>
                .
              </label>
            </div>
            <p style={{fontFamily:F.body,fontSize:11,color:"rgba(242,239,232,0.18)",lineHeight:1.6,marginBottom:6,fontWeight:300,paddingLeft:26}}>
              By continuing you confirm you are 18 years or older.
            </p>
            {errors.agree&&<p style={{fontFamily:F.body,fontSize:11,color:"#f87171",marginBottom:12}}>{errors.agree}</p>}
            <p style={{fontFamily:F.body,fontSize:12,color:"rgba(242,239,232,0.24)",lineHeight:1.65,marginBottom:16,fontWeight:300}}>
              You'll be redirected to our secure payment partner to authorise your Weekly Stride membership. Cancel anytime from your dashboard.
            </p>
            <div style={{display:"flex",gap:10}}>
              <button onClick={()=>setStep(1)} style={{flex:1,fontFamily:F.body,fontSize:13,fontWeight:500,padding:"14px",borderRadius:8,border:"1px solid rgba(242,239,232,0.1)",background:"none",color:"rgba(242,239,232,0.38)",cursor:"pointer"}}>← Back</button>
              <button onClick={handleNext} style={{flex:2,fontFamily:F.body,fontSize:14,fontWeight:600,padding:"14px",borderRadius:8,border:"none",cursor:"pointer",background:C.grove,color:C.mist,transition:"background .2s"}}
                onMouseEnter={e=>e.currentTarget.style.background=C.grove2}
                onMouseLeave={e=>e.currentTarget.style.background=C.grove}>
                Confirm & join →
              </button>
            </div>
          </div>
        )}

        {step===3&&(
          <div style={{textAlign:"center",padding:"24px 0"}}>
            <div style={{width:80,height:80,borderRadius:"50%",background:"rgba(26,92,50,0.14)",border:"1px solid rgba(26,92,50,0.28)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 24px",fontSize:36}}>✓</div>
            <h2 style={{fontFamily:F.display,fontSize:"clamp(36px,4vw,48px)",fontWeight:600,letterSpacing:"-0.025em",color:C.mist,marginBottom:12}}>You're in.</h2>
            <p style={{fontFamily:F.body,fontSize:15,color:"rgba(242,239,232,0.42)",lineHeight:1.8,marginBottom:28,fontWeight:300}}>Your first ₹10 will be processed next Monday.<br/>Welcome to the movement, {form.name.split(" ")[0]}.</p>
            <div style={{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:8,padding:"20px 40px",borderRadius:16,background:"rgba(26,92,50,0.1)",border:"1px solid rgba(26,92,50,0.18)",marginBottom:20}}>
              <div style={{fontFamily:F.mono,fontSize:9,textTransform:"uppercase",letterSpacing:"0.15em",color:"rgba(26,92,50,0.6)"}}>Your streak</div>
              <div style={{fontFamily:F.display,fontSize:56,fontWeight:700,color:C.grove,lineHeight:1}}>1</div>
              <div style={{fontFamily:F.mono,fontSize:9,color:"rgba(26,92,50,0.5)",textTransform:"uppercase",letterSpacing:"0.1em"}}>Week 1 of your stride</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}