import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../data';

export default function Footer() {
  const navigate = useNavigate();

  const go = (id) => {
    if (id === "home") navigate("/");
    else if (id === "how") navigate("/how-it-works");
    else navigate(`/${id}`);
  };

  return (
    <footer style={{ background: "#080a07", borderTop: "1px solid rgba(242,239,232,0.05)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 40px 0" }}>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(242,239,232,0.05)" }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: F.display, fontSize: 22, fontWeight: 600, color: C.mist, marginBottom: 10 }}>
              Stride<span style={{ color: C.grove }}>.</span>
            </div>
            <p style={{ fontFamily: F.body, fontSize: 13, color: "rgba(242,239,232,0.28)", lineHeight: 1.7, marginBottom: 16, fontWeight: 300, maxWidth: 220 }}>
              Lifestyle philanthropy. ₹10 a week. The new kind of Indian.
            </p>
            <span style={{ fontFamily: F.mono, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(242,239,232,0.18)", border: "1px solid rgba(242,239,232,0.08)", padding: "5px 10px", borderRadius: 4 }}>
              MSME Registered · UDYAM-KR-04-0146894
            </span>
          </div>

          {/* Navigate */}
          <div>
            <div style={{ fontFamily: F.mono, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(242,239,232,0.18)", marginBottom: 18 }}>Navigate</div>
            {[["home","Home"],["how","How it works"],["proof","Proof"],["causes","Causes"],["dashboard","Dashboard"],["join","Join"]].map(([id, label]) => (
              <button key={id} onClick={() => go(id)} style={{ display: "block", background: "none", border: "none", cursor: "pointer", fontFamily: F.body, fontSize: 13, color: "rgba(242,239,232,0.32)", padding: "5px 0", transition: "color .2s", textAlign: "left" }}
                onMouseEnter={e => e.currentTarget.style.color = "rgba(242,239,232,0.75)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(242,239,232,0.32)"}>
                {label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: F.mono, fontSize: 9, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(242,239,232,0.18)", marginBottom: 18 }}>Contact</div>
            {[
              "connect@strideindia.in",
              "+91 94811 11786",
              "Belagavi, Karnataka – 590003"
            ].map(t => (
              <p key={t} style={{ fontFamily: F.body, fontSize: 13, color: "rgba(242,239,232,0.3)", lineHeight: 1.7, fontWeight: 300 }}>{t}</p>
            ))}
            <p style={{ fontFamily: F.body, fontSize: 12, color: "rgba(242,239,232,0.18)", lineHeight: 1.6, marginTop: 12, fontWeight: 300 }}>
              Grievance Officer: Hafiz Patel · connect@strideindia.in · responds within 48 hours
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: F.mono, fontSize: 9, color: "rgba(242,239,232,0.14)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            © 2025 Stride Ventures · UDYAM-KR-04-0146894
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            {[["terms","Terms"],["privacy","Privacy"],["refund","Refund Policy"]].map(([id, label]) => (
              <button key={id} onClick={() => go(id)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: F.mono, fontSize: 9, color: "rgba(242,239,232,0.2)", textTransform: "uppercase", letterSpacing: "0.1em", transition: "color .2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "rgba(242,239,232,0.5)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(242,239,232,0.2)"}>
                {label}
              </button>
            ))}
          </div>
          <span style={{ fontFamily: F.mono, fontSize: 9, color: "rgba(242,239,232,0.1)", textTransform: "uppercase", letterSpacing: "0.09em" }}>
            MSME · DPDPA 2023 · Cancel Anytime
          </span>
        </div>

      </div>
    </footer>
  );
}