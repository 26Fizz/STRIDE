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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10 transition-all duration-300">
      <div className="container mx-auto px-5 py-3 flex justify-between items-center">
        {/* Brand */}
        <h1
          onClick={() => handleNavClick('Home')}
          className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight cursor-pointer select-none"
        >
          STRIDE<span className="text-red-600">.</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-6 font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`transition-all duration-200 text-sm sm:text-base py-1 border-b-2 ${
                activePage === item
                  ? 'text-white border-red-600 font-semibold'
                  : 'text-gray-300 border-transparent hover:text-white hover:border-gray-500'
              }`}
            >
              {item}
            </button>
          ))}

          {/* Auth Buttons */}
          {user ? (
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => setIsLoginOpen(true)}
                className="ml-4 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300"
              >
                Login
              </button>
              <button
                onClick={() => setIsSignupOpen(true)}
                className="px-4 py-2 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                Signup
              </button>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden p-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition shadow-md"
        >
          {isMobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden absolute left-0 right-0 top-full bg-black border-t border-white/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`text-lg font-medium py-2 w-3/4 rounded-md transition-all ${
                activePage === item
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}

          {user ? (
            <button
              onClick={handleLogout}
              className="text-lg font-semibold py-2 w-3/4 rounded-md bg-red-600 text-white hover:bg-red-700 transition-all"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setIsLoginOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="text-lg font-medium py-2 w-3/4 rounded-md bg-white text-black hover:bg-gray-200 transition-all"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsSignupOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="text-lg font-medium py-2 w-3/4 rounded-md border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all"
              >
                Signup
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
