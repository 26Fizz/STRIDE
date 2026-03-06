import React from 'react';
import { useNavigate } from 'react-router-dom';
import { C, F } from '../../data';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 20,
      background: C.ink
    }}>
      {/* Ghostly 404 background text */}
      <div style={{
        fontFamily: F.display,
        fontSize: "clamp(80px, 15vw, 120px)",
        fontWeight: 700,
        color: "rgba(242,239,232,0.06)",
        lineHeight: 1,
        marginBottom: 16
      }}>
        404
      </div>

      <h1 style={{
        fontFamily: F.display,
        fontSize: 36,
        fontWeight: 600,
        color: C.mist,
        marginBottom: 10
      }}>
        Lost in the rhythm.
      </h1>

      <p style={{
        fontFamily: F.body,
        fontSize: 14,
        color: "rgba(242,239,232,0.38)",
        marginBottom: 28,
        fontWeight: 300
      }}>
        The page you're looking for doesn't exist or has moved.
      </p>

      <button 
        onClick={() => navigate('/')} 
        style={{
          fontFamily: F.body,
          fontSize: 14,
          fontWeight: 600,
          padding: "14px 32px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          background: C.grove,
          color: C.mist,
          transition: "opacity 0.2s"
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
        onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
      >
        Back to home
      </button>
    </div>
  );
}