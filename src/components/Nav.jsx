import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Added for routing
import { C, F } from '../data';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  
  const navigate = useNavigate(); // Replaces setPage
  const location = useLocation(); // Replaces the 'page' prop
  
  // Mapping current path to your 'page' logic for styling
  const currentPage = location.pathname === "/" ? "home" : location.pathname.substring(1);

  // Helper to handle navigation
  // Helper to handle navigation
  const setPage = (id) => {
    if (id === "home") navigate("/");
    // This line must match the <Route path="/how-it-works" ... /> in your App.jsx
    else if (id === "how") navigate("/how-it-works"); 
    else navigate(`/${id}`);
  };

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const links = [["how", "How it works"], ["proof", "Proof"], ["causes", "Causes"], ["dashboard", "Dashboard"]];
  const navBg = scrolled ? "rgba(13,13,11,0.93)" : "transparent";
  const navBorder = scrolled ? "1px solid rgba(242,239,232,0.06)" : "none";

  return (
    <>
      <nav className="nav-pad" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", justifyContent: "space-between", alignItems: "center", padding: `${scrolled ? 12 : 20}px 40px`, background: navBg, backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: navBorder, transition: "all .3s ease" }}>
        <button onClick={() => setPage("home")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: F.display, fontSize: 22, fontWeight: 600, color: C.mist, letterSpacing: "-0.01em" }}>
          Stride<span style={{ color: C.grove }}>.</span>
        </button>
        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {links.map(([id, label]) => (
            <button key={id} onClick={() => setPage(id)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: F.body, fontSize: 13, fontWeight: 500, color: currentPage === id ? C.mist : "rgba(242,239,232,0.38)", borderBottom: currentPage === id ? `1px solid ${C.grove}` : "1px solid transparent", paddingBottom: 2, transition: "color .2s" }}>
              {label}
            </button>
          ))}
          <button onClick={() => setPage("join")} style={{ background: C.grove, color: C.mist, fontFamily: F.body, fontSize: 13, fontWeight: 600, padding: "10px 20px", borderRadius: 6, border: "none", cursor: "pointer", transition: "background .2s" }}
            onMouseEnter={e => e.currentTarget.style.background = C.grove2}
            onMouseLeave={e => e.currentTarget.style.background = C.grove}>
            Join — ₹10/week
          </button>
        </div>
        <button className="show-mobile" onClick={() => setOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(242,239,232,0.6)", fontSize: 22 }}>☰</button>
      </nav>
      {open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(13,13,11,0.97)", backdropFilter: "blur(24px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <button onClick={() => setOpen(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", cursor: "pointer", color: "rgba(242,239,232,0.4)", fontSize: 30, lineHeight: 1 }}>×</button>
          {links.map(([id, label], i) => (
            <button key={id} onClick={() => { setPage(id); setOpen(false); }} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: F.display, fontSize: 36, fontStyle: "italic", fontWeight: 500, color: "rgba(242,239,232,0.65)", padding: "8px 0", animation: `fadeUp .5s ${i * .07}s both` }}>
              {label}
            </button>
          ))}
          <button onClick={() => { setPage("join"); setOpen(false); }} style={{ marginTop: 16, background: C.grove, color: C.mist, fontFamily: F.body, fontSize: 15, fontWeight: 600, padding: "15px 44px", borderRadius: 8, border: "none", cursor: "pointer" }}>
            Join — ₹10/week
          </button>
        </div>
      )}
    </>
  );
}