// src/components/Marketing/HeroSection.jsx
import React from 'react';

const HeroSection = ({ navigate }) => {
    return (
      <section className="pt-20 sm:pt-24 min-h-[70vh] flex items-center bg-gray-50">
        <div className="container mx-auto px-4 py-8 grid gap-10 items-center">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full shadow-sm inline-block">
              Your Donation. Your Choice.
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Unlock the World's Best <span className="text-yellow-600">Ideas</span>, Drive <span className="text-blue-600">Real Impact</span>.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
              Donate to youth empowerment programs exclusively on **Mondays**, and instantly choose from 5 premium book summaries to fuel your personal growth.
            </p>
            <button
              onClick={() => navigate('Donate')} 
              className="mt-6 sm:mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:py-3.5 sm:px-8 rounded-full text-base sm:text-lg shadow-xl shadow-blue-400/60 transition transform hover:scale-[1.02] focus:ring-4 focus:ring-blue-300"
            >
              Choose Your Summary & Donate
            </button>
          </div>
        </div>
      </section>
    );
};

export default HeroSection;