import React from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, Sparkles } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: <Heart className="w-8 h-8 text-emerald-400" />,
    title: "You Donate",
    desc: "Each Monday, you contribute ₹10 — a small but consistent act that shapes bigger change.",
  },
  {
    id: 2,
    icon: <BookOpen className="w-8 h-8 text-emerald-400" />,
    title: "We Curate Wisdom",
    desc: "Our team handpicks five timeless books and delivers a 3-minute capsule of insight each week.",
  },
  {
    id: 3,
    icon: <Sparkles className="w-8 h-8 text-emerald-400" />,
    title: "You Grow Weekly",
    desc: "With every Monday read, you sharpen your mind and fuel a movement of thoughtful change.",
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="relative bg-black text-white py-28 px-6 overflow-hidden">
      {/* Subtle background gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,83,45,0.06),_transparent_75%)] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-20 relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-emerald-300 to-gray-100">
          How STRIDE Works
        </h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
          Simple. Consistent. Transformative. Every Monday, your small action sets big ideas in motion.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group bg-[#0e0e0e] hover:bg-[#121212] border border-gray-800 hover:border-emerald-500/30 rounded-2xl p-8 text-center transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 mx-auto mb-6 transition-all duration-300">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-100 mb-3">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Accent underline */}
      <div className="relative z-10 mt-24 w-24 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto rounded-full opacity-40" />
    </section>
  );
};

export default HowWeWorkSection;
