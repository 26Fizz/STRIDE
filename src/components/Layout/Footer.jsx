// src/components/Layout/Footer.jsx
import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 text-white p-6 mt-12 text-center">
     <p className="text-xs sm:text-sm text-gray-300">
  © {new Date().getFullYear()} Monday Momentum · 
  <a href="/privacy" className="text-blue-400 hover:text-blue-300 ml-1">Privacy</a>
</p>
    </footer>
);

export default Footer;