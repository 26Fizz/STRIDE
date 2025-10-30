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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleNavClick = (item) => {
    navigate(item);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-500 ${
        isScrolled ? "bg-black/40 backdrop-blur-md" : "bg-black"
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
              className={`flex items-center gap-1 transition-all duration-300 border-b-2 py-1 text-sm sm:text-base ${
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
              className="ml-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 flex items-center gap-1"
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

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition shadow-md"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <XIcon className="w-5 h-5" />
          ) : (
            <MenuIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="sm:hidden absolute left-0 right-0 top-full bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-2xl border-t border-white/10 shadow-2xl"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {navItems.map(({ name, icon }) => (
                <motion.button
                  key={name}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleNavClick(name)}
                  className={`w-[85%] flex items-center justify-center gap-2 py-2.5 text-base font-medium rounded-xl backdrop-blur-lg border transition-all duration-300 ${
                    activePage === name
                      ? "bg-gradient-to-r from-red-600 to-red-500 text-white border-red-600 shadow-lg shadow-red-900/30"
                      : "bg-white/5 text-gray-200 border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {icon} {name}
                  {name === "Impact" && (
                    <span className="relative flex items-center ml-1">
                      <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                      <span className="absolute w-2.5 h-2.5 bg-red-500 rounded-full opacity-75 animate-ping" />
                    </span>
                  )}
                </motion.button>
              ))}

              {/* Auth Section */}
              <div className="pt-3 border-t border-white/10 w-[85%] flex flex-col gap-3">
                {user ? (
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
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
                      className="flex items-center justify-center gap-2 py-2 rounded-xl bg-white text-black hover:bg-gray-100 transition-all duration-300"
                    >
                      <LogIn size={16} /> Login
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => {
                        setIsSignupOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center justify-center gap-2 py-2 rounded-xl border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                      <UserPlus size={16} /> Signup
                    </motion.button>
                  </>
                )}
              </div>

              <p className="text-xs text-gray-500 mt-4">
                STRIDE © {new Date().getFullYear()} • Every rupee counts ❤️
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
