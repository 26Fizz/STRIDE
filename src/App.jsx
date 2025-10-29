// src/App.jsx
import React, { useState, useCallback, useMemo } from 'react';

// Import Utilities & Data
import { getDayInfo } from './utils/date';
import { DEFAULT_BOOK_ID } from './data/books';

// Import Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/Marketing/HeroSection';
import HowItWorksSection from './components/Marketing/HowItWorksSection';
import DonationPanel from './components/Donations/DonationPanel';
import MySummariesPage from './components/Summaries/MySummariesPage';
import SignupModal from './Auth/SignupModal';
import LoginModal from './Auth/LoginModal';
import { useAuth } from './hooks/useAuth';

// ✅ NEW IMPORT
import Leaderboard from './components/Leaderboard/Leaderboard';

const App = () => {
  const [activePage, setActivePage] = useState('Home');
  const [isSimulatingMonday, setIsSimulatingMonday] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(DEFAULT_BOOK_ID);
  const [unlockedSummaries, setUnlockedSummaries] = useState({
    'atomic_habits': { unlockedAt: Date.now() - 86400000, amount: 10 }
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Modals state
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const { isMonday: actualIsMonday } = useMemo(() => getDayInfo(), []);
  const isDonationTime = isSimulatingMonday || actualIsMonday;

  const authUser = useAuth(); // Firebase Auth user

  const navigate = useCallback((page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  }, []);

  const handleUnlockSummary = useCallback(
    (bookId, amount) => {
      setUnlockedSummaries((prev) => ({
        ...prev,
        [bookId]: { unlockedAt: Date.now(), amount: amount },
      }));
      navigate('My Summaries');
    },
    [navigate]
  );

  const toggleSimulateMonday = () => {
    setIsSimulatingMonday((prev) => !prev);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'How It Works':
        return <HowItWorksSection />;
      case 'Donate':
        return (
          <DonationPanel
            onUnlockSummary={handleUnlockSummary}
            isDonationActive={isDonationTime}
            isSimulatingMonday={isSimulatingMonday}
            toggleSimulateMonday={toggleSimulateMonday}
            selectedBookId={selectedBookId}
            setSelectedBookId={setSelectedBookId}
          />
        );
      case 'My Summaries':
        return <MySummariesPage unlockedSummaries={unlockedSummaries} />;
      case 'Home':
      default:
        return (
          <>
            <HeroSection navigate={navigate} />
            {/* ✅ Added Leaderboard directly below Hero */}
            <Leaderboard />
            <HowItWorksSection />
          </>
        );
    }
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
        navigate={navigate}
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
      <main className="pt-14 sm:pt-16">{renderPage()}</main>

      <Footer />
    </div>
  );
};

export default App;
