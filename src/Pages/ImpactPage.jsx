// src/Pages/ImpactPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { Play, Users, BookOpen, Heart, IndianRupee } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IMPACT_WEEKS } from "../data/impactData";

const ImpactPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-black text-white pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
      {/* 🌟 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto px-2"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Proof of <span className="text-red-500">Impact</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed px-2">
          Every Monday, every rupee, and every act of generosity creates ripples
          of change. Welcome to STRIDE’s living impact log — 100% transparent.<br/>
          Note: This is sample data. Real impact numbers will appear once Month is completed
        </p>

        <div className="mt-6 inline-flex items-center gap-2 bg-red-600/10 text-red-400 px-4 py-2 rounded-full text-xs sm:text-sm border border-red-600/30">
          <Heart className="w-4 h-4 text-red-400 animate-pulse" />
          100% Transparent. Every Rupee Tracked in STRIDE Impact Log.
          
        </div>
      </motion.div>

      {/* 📊 Global Stats */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto">
        {[
          { icon: <IndianRupee className="w-6 h-6" />, label: "Total Raised", value: "₹9,370" },
          { icon: <Users className="w-6 h-6" />, label: "Total Donors", value: "119" },
          { icon: <BookOpen className="w-6 h-6" />, label: "Summaries Shared", value: "10" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-to-b from-gray-900 to-gray-800 p-5 sm:p-6 rounded-2xl text-center border border-white/10 hover:border-red-500/30 transition-all duration-300"
          >
            <div className="flex justify-center mb-3 text-red-400">{stat.icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{stat.value}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* 🕓 Weekly Impact Timeline */}
      <div className="mt-16 sm:mt-20 space-y-16 sm:space-y-20 max-w-5xl mx-auto">
        {IMPACT_WEEKS.map((week, index) => (
          <motion.div
            key={week.week}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            } items-center gap-6 sm:gap-10`}
          >
            {/* Image */}
            <div className="w-full sm:w-1/2">
              <img
                src={week.image}
                alt={week.title}
                className="w-full rounded-2xl shadow-lg border border-white/10 hover:scale-[1.02] transition-all"
              />
            </div>

            {/* Content */}
            <div className="w-full sm:w-1/2 text-center sm:text-left space-y-3 sm:space-y-4 px-2 sm:px-0">
              <h2 className="text-xl sm:text-2xl font-bold text-white">{week.week}</h2>
              <h3 className="text-lg sm:text-xl text-red-400 font-semibold">{week.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {week.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
                <div className="flex items-center gap-1">
                  <IndianRupee className="w-4 h-4 text-green-400" />
                  <span>₹{week.raised.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>{week.donors} Donors</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4 text-yellow-400" />
                  <span>{week.summaries} Summaries</span>
                </div>
              </div>

              {/* Video */}
              <div className="mt-5 sm:mt-6 rounded-xl overflow-hidden border border-white/10 aspect-video w-full">
                <iframe
                  src={week.video}
                  title={week.title}
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                ></iframe>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🧠 Transparency Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-20 sm:mt-24 max-w-3xl mx-auto text-center bg-gray-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
           A Note from STRIDE
        </h3>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
          STRIDE is currently in its early phase, operating exclusively in{" "}
          <strong>Belagavi City</strong>. All donations are pooled and donated{" "}
          <strong>monthly</strong> to maximize real-world impact through larger,
          focused contributions.
        </p>

        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Need transparency? Even for a <strong>₹1 donation</strong>, you can
          directly message us on <strong>WhatsApp</strong>. Every donor can
          receive personalized proof of where their contribution went — because{" "}
          <span className="text-red-400 font-semibold">it matters</span>.
        </p>
      </motion.div>

      {/* 🌍 CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-14 sm:mt-16 text-center px-3"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Be Part of the Next Impact Drop
        </h2>
        <p className="text-gray-400 mb-6 text-sm sm:text-base">
          Join thousands who take their STRIDE every Monday — your donation fuels the next chapter.
        </p>
        <button
          onClick={() => navigate("/donate")}
          className="px-5 sm:px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold text-white transition-all hover:scale-105"
        >
          Take Your STRIDE →
        </button>
      </motion.div>
    </section>
  );
};

export default ImpactPage;
