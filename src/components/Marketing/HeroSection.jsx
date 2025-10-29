import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ navigate }) => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[92vh] text-center bg-black text-white px-6 overflow-hidden">
      
      {/* 🌿 Soft ambient glow (green tint for harmony) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-t from-emerald-600/20 via-emerald-500/10 to-transparent blur-[120px]" />

      {/* ✨ Hero Content */}
      <motion.div
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* 🏁 Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight font-extrabold tracking-tight">
          <span className="font-light  text-gray-400">A New </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#10b981]">
            INDIA
          </span>
          <br className="hidden sm:block" />
          <span className="font-light text-gray-400">Begins With </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#065f46] via-[#059669] to-[#34d399]">
            YOU
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-gray-400 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Donate <span className="text-emerald-400 font-medium">₹10</span> every Monday and unlock a 3-minute capsule of{" "}
          <span className="text-emerald-300">wisdom</span>.  
          Build the habit. Be the change.
        </p>

        {/* 🚀 CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA (Red Solid) */}
          <motion.button
            whileHover={{
              scale: 1.07,
              boxShadow: "0 0 40px rgba(239,68,68,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("Donate")}
            className="relative overflow-hidden bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-12 rounded-full text-lg tracking-wide shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-300"
          >
            Take Your First Stride
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("LearnMore")}
            className="border border-gray-700 text-gray-400 hover:text-white hover:border-emerald-500 py-4 px-10 rounded-full text-lg font-medium transition-all duration-300"
          >
            Learn More
          </motion.button>
        </div>

        {/* Tagline */}
        <p className="mt-6 text-sm text-gray-500 italic">
          Be bold. Be consistent. Lead the{" "}
          <span className="text-emerald-400 font-semibold">change.</span>
        </p>
        
      </motion.div>
    </section>
  );
};

export default HeroSection;
