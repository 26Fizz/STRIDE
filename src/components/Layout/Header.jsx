// src/components/Layout/Header.jsx
import React from 'react';
import { MenuIcon, XIcon } from '../../icons/icons';
import { useAuth } from "../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase';

const Header = ({
  navigate,
  activePage,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  setIsSignupOpen,
  setIsLoginOpen
}) => {
  const navItems = ['Home', 'How It Works', 'Donate', 'My Summaries'];
  const user = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleNavClick = (item) => {
    navigate(item);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 
          onClick={() => handleNavClick('Home')} 
          className="text-xl sm:text-2xl font-extrabold text-blue-600 tracking-tight cursor-pointer"
        >
          Monday<span className="text-yellow-500">Momentum</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-4 md:space-x-6 font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`transition-all duration-200 text-sm sm:text-base py-1 border-b-2 
                ${activePage === item
                  ? 'text-blue-600 border-blue-600 font-bold'
                  : 'text-gray-600 border-transparent hover:text-blue-500 hover:border-blue-300'
                }`}
            >
              {item}
            </button>
          ))}

          {/* Auth Buttons */}
          {user ? (
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => setIsLoginOpen(true)}
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Login
              </button>
              <button
                onClick={() => setIsSignupOpen(true)}
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
              >
                Signup
              </button>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
        >
          {isMobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 top-16 bg-white z-40 flex flex-col items-center py-8 space-y-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`text-xl font-bold py-3 w-3/4 rounded-lg transition-colors
                ${activePage === item
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-800 hover:bg-gray-100'
                }`}
            >
              {item}
            </button>
          ))}

          {user ? (
            <button
              onClick={handleLogout}
              className="text-xl font-bold py-3 w-3/4 rounded-lg bg-red-600 text-white hover:bg-red-700 shadow-lg"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => { setIsLoginOpen(true); setIsMobileMenuOpen(false); }}
                className="text-xl font-bold py-3 w-3/4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
              >
                Login
              </button>
              <button
                onClick={() => { setIsSignupOpen(true); setIsMobileMenuOpen(false); }}
                className="text-xl font-bold py-3 w-3/4 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg"
              >
                Signup
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
