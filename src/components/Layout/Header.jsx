// src/components/Layout/Header.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon } from "../../icons/icons";
import { useAuth } from "../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import {
  Flame,
  Home,
  BookOpen,
  Gift,
  BarChart3,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";

const Header = ({
  navigate,
  activePage,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  setIsSignupOpen,
  setIsLoginOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const user = useAuth();

  // ✅ Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  // ✅ Detect scroll to toggle header background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => await signOut(auth);

  const handleNavClick = (page) => {
    navigate(page);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", icon: <Home size={16} /> },
    { name: "How It Works", icon: <BookOpen size={16} /> },
    { name: "Impact", icon: <BarChart3 size={16} /> },
    { name: "Donate", icon: <Gift size={16} /> },
    { name: "My Summaries", icon: <Flame size={16} /> },
  ];

  return (
    <>
      {/* ✅ Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] border-b border-white/10 transition-all duration-500 ${
          isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-black"
        }`}
      >
        <div className="container mx-auto px-5 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1
            onClick={() => handleNavClick("Home")}
            className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight cursor-pointer select-none"
          >
            STRIDE<span className="text-red-600">.</span>
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center space-x-6 font-medium">
            {navItems.map(({ name, icon }) => (
              <button
                key={name}
                onClick={() => handleNavClick(name)}
                className={`flex items-center gap-1 border-b-2 py-1 transition-all duration-300 ${
                  activePage === name
                    ? "text-white border-red-600"
                    : "text-gray-300 border-transparent hover:text-white hover:border-gray-500"
                }`}
              >
                {icon} {name}
                {name === "Impact" && (
                  <span className="relative flex items-center ml-1">
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                    <span className="absolute w-2.5 h-2.5 bg-red-500 rounded-full opacity-75 animate-ping" />
                  </span>
                )}
              </button>
            ))}

            {/* Auth Buttons */}
            {user ? (
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 flex items-center gap-1"
              >
                <LogOut size={16} /> Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="ml-4 px-4 py-2 bg-white/90 text-black rounded-full hover:bg-white transition-all duration-300 flex items-center gap-1"
                >
                  <LogIn size={16} /> Login
                </button>
                <button
                  onClick={() => setIsSignupOpen(true)}
                  className="px-4 py-2 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center gap-1"
                >
                  <UserPlus size={16} /> Signup
                </button>
              </>
            )}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition shadow-md z-[150]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ✅ Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-xl flex flex-col items-center pt-24 sm:hidden"
          >
            {/* Close button inside menu */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Close menu"
            >
              <XIcon className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center w-full px-6 space-y-4">
              {navItems.map(({ name, icon }) => (
                <motion.button
                  key={name}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleNavClick(name)}
                  className={`w-full max-w-[480px] flex items-center justify-center gap-2 py-3 text-base font-medium rounded-2xl transition-all duration-200 ${
                    activePage === name
                      ? "bg-gradient-to-r from-red-600 to-red-500 text-white border border-red-600 shadow-lg shadow-red-900/30"
                      : "bg-white/5 text-gray-200 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {icon} {name}
                </motion.button>
              ))}

              {/* Auth Buttons */}
              <div className="pt-4 border-t border-white/10 w-full max-w-[480px] flex flex-col gap-3">
                {user ? (
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
                  >
                    <LogOut size={16} /> Logout
                  </motion.button>
                ) : (
                  <>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setIsLoginOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white text-black hover:bg-gray-100 transition-all duration-300"
                    >
                      <LogIn size={16} /> Login
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setIsSignupOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-center gap-2 py-3 rounded-2xl border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                      <UserPlus size={16} /> Signup
                    </motion.button>
                  </>
                )}
              </div>

              <p className="text-xs text-gray-500 mt-5">
                STRIDE © {new Date().getFullYear()} • Every rupee counts ❤️
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
