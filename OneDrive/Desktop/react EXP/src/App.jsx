import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Data & Constants
import { C } from './data';

// Global Components
import Nav from './components/Nav';
import Footer from './components/Footer';
import FontLoader from './components/FontLoader';

// Pages
import HomePage from './pages/Home';
import HowPage from './pages/How';
import ProofPage from './pages/Proof';
import CausesPage from './pages/Causes';
import JoinPage from './pages/Join';
import DashboardPage from './pages/Dashboard';
import NotFound from './pages/NotFound';
import { LegalPage, TERMS_S, PRIVACY_S, REFUND_S } from './pages/Legal';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <FontLoader />
      <ScrollToTop />
      
      <div style={{ minHeight: "100svh", background: C.ink, display: 'flex', flexDirection: 'column' }}>
        {/* Navigation is persistent across all pages */}
        <Nav />

        <main style={{ flex: 1 }}>
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowPage />} />
            <Route path="/proof" element={<ProofPage />} />
            <Route path="/causes" element={<CausesPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />

            {/* Legal Pages using the reusable component */}
            <Route path="/terms" element={<LegalPage title="Terms of Service" sections={TERMS_S} />} />
            <Route path="/privacy" element={<LegalPage title="Privacy Policy" sections={PRIVACY_S} />} />
            <Route path="/refund" element={<LegalPage title="Refund Policy" sections={REFUND_S} />} />

            {/* 404 Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer is persistent */}
        <Footer />
      </div>
    </Router>
  );
}