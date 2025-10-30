// src/App.jsx
import React, { useState, useCallback, useMemo, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";

// Import Utilities & Data
import { getDayInfo } from "./utils/date";
import { DEFAULT_BOOK_ID } from "./data/books";

// Import Components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import HeroSection from "./components/Marketing/HeroSection";
import HowItWorksSection from "./components/Marketing/HowItWorksSection";
import DonationPanel from "./components/Donations/DonationPanel";
import MySummariesPage from "./components/Summaries/MySummariesPage";
import SignupModal from "./Auth/SignupModal";
import LoginModal from "./Auth/LoginModal";
import { useAuth } from "./hooks/useAuth";
import Leaderboard from "./components/Leaderboard/Leaderboard";

// ✅ Import Legal Pages
import PrivacyPolicy from "./Legal/PrivacyPolicy";
import TermsConditions from "./Legal/TermsConditions";
import RefundPolicy from "./Legal/RefundPolicy";
import Contact from "./Legal/Contact";

// ✅ Import the new Impact Page
import ImpactPage from "./Pages/ImpactPage";

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activePage, setActivePage] = useState("Home");
  const [isSimulatingMonday, setIsSimulatingMonday] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(DEFAULT_BOOK_ID);
  const [unlockedSummaries, setUnlockedSummaries] = useState({
    atomic_habits: { unlockedAt: Date.now() - 86400000, amount: 10 },
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Modals state
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const { isMonday: actualIsMonday } = useMemo(() => getDayInfo(), []);
  const isDonationTime = isSimulatingMonday || actualIsMonday;

  const authUser = useAuth(); // Firebase Auth user

  // 🔹 Sync activePage with URL path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActivePage("Home");
    else if (path === "/how-it-works") setActivePage("How It Works");
    else if (path === "/impact") setActivePage("Impact");
    else if (path === "/donate") setActivePage("Donate");
    else if (path === "/summaries") setActivePage("My Summaries");
    else setActivePage("");
  }, [location.pathname]);

  // 🔹 Unified navigate function
  const handleNavigate = useCallback(
    (page) => {
      let path = "/";

      switch (page) {
        // Main pages
        case "Home":
          path = "/";
          break;
        case "How It Works":
          path = "/how-it-works";
          break;
        case "Impact":
          path = "/impact";
          break;
        case "Donate":
          path = "/donate";
          break;
        case "My Summaries":
          path = "/summaries";
          break;

        // ✅ Legal pages (footer)
        case "PrivacyPolicy":
        case "/privacy-policy":
          path = "/privacy-policy";
          break;
        case "TermsConditions":
        case "/terms-conditions":
          path = "/terms-conditions";
          break;
        case "RefundPolicy":
        case "/refund-policy":
          path = "/refund-policy";
          break;
        case "Contact":
        case "/contact":
          path = "/contact";
          break;

        default:
          path = "/";
      }

      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    },
    [navigate]
  );

  const handleUnlockSummary = useCallback(
    (bookId, amount) => {
      setUnlockedSummaries((prev) => ({
        ...prev,
        [bookId]: { unlockedAt: Date.now(), amount },
      }));
      handleNavigate("My Summaries");
    },
    [handleNavigate]
  );

  const toggleSimulateMonday = () => {
    setIsSimulatingMonday((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        .font-inter { font-family: 'Inter', sans-serif; }
        .shadow-3xl { box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1); }
        @media (min-width: 420px) {
          .xs\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>

      {/* Header */}
      <Header
        navigate={handleNavigate}
        activePage={activePage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsSignupOpen={setIsSignupOpen}
        setIsLoginOpen={setIsLoginOpen}
      />

      {/* Modals */}
      {isSignupOpen && <SignupModal closeModal={() => setIsSignupOpen(false)} />}
      {isLoginOpen && <LoginModal closeModal={() => setIsLoginOpen(false)} />}

      {/* Main Content */}
      <main className="pt-14 sm:pt-16">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <HeroSection navigate={handleNavigate} />
                <Leaderboard />
                <HowItWorksSection />
              </>
            }
          />

          {/* Core Pages */}
          <Route path="/how-it-works" element={<HowItWorksSection />} />
          <Route
            path="/donate"
            element={
              <DonationPanel
                onUnlockSummary={handleUnlockSummary}
                isDonationActive={isDonationTime}
                isSimulatingMonday={isSimulatingMonday}
                toggleSimulateMonday={toggleSimulateMonday}
                selectedBookId={selectedBookId}
                setSelectedBookId={setSelectedBookId}
              />
            }
          />
          <Route path="/summaries" element={<MySummariesPage unlockedSummaries={unlockedSummaries} />} />
          <Route path="/impact" element={<ImpactPage />} />

          {/* ✅ Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer navigate={handleNavigate} />
    </div>
  );
};

// ✅ Wrap with Router
const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
