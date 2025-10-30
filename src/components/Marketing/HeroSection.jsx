// src/components/Marketing/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ navigate }) => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] sm:min-h-[92vh] text-center bg-black text-white px-4 sm:px-6 overflow-hidden">
      
      {/* 🌿 Soft green glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] bg-gradient-to-t from-emerald-600/25 via-emerald-500/10 to-transparent blur-[100px] sm:blur-[120px]" />

      {/* ✨ Hero Content */}
      <motion.div
        className="relative z-10 max-w-4xl w-full"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* 🏁 Heading */}
        <h1
          className="
            font-extrabold tracking-tight 
            text-[13vw] sm:text-[5.5rem] md:text-[6rem] lg:text-[6.5rem]
            leading-[1.05] sm:leading-[1]
          "
        >
          {/* Line 1: A New INDIA */}
          <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2">
            <span className="font-light text-gray-400">A New</span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(6,95,70,0.25) 0%, #059669 20%, #10b981 50%, #059669 80%, rgba(6,95,70,0.25) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              INDIA
            </span>
          </div>

          {/* Line 2: Begins With YOU */}
          <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2 mt-1 sm:mt-2">
            <span className="font-light text-gray-400">Begins With</span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(5,150,105,0.25) 0%, #10b981 20%, #34d399 50%, #10b981 80%, rgba(5,150,105,0.25) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              YOU
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 sm:mt-6 text-gray-400 text-sm sm:text-lg md:text-[1.25rem] font-light max-w-2xl mx-auto leading-relaxed px-2">
          Donate <span className="text-emerald-400 font-medium">₹10</span> every Monday and unlock a 3-minute capsule of{" "}
          <span className="text-emerald-300">wisdom</span>.  
          Be the change. Build the habit — and a new India.
        </p>

        {/* 🚀 CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-3">
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("Donate")}
            className="relative overflow-hidden bg-red-600 hover:bg-red-700 text-white font-semibold py-3 sm:py-4 px-8 sm:px-12 rounded-full text-sm sm:text-lg tracking-wide shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-300 w-full sm:w-auto"
          >
            Begin Your STRIDE
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("LearnMore")}
            className="border border-gray-700 text-gray-400 hover:text-white hover:border-emerald-500 py-3 sm:py-4 px-8 sm:px-10 rounded-full text-sm sm:text-lg font-medium transition-all duration-300 w-full sm:w-auto"
          >
            Learn More
          </motion.button>
        </div>

        {/* Tagline */}
        <p className="mt-6 text-[11px] sm:text-xs md:text-sm text-gray-500 italic px-2 leading-relaxed">
          Transparent. Youth-led. Impact <span className="text-white">you</span> can see.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
