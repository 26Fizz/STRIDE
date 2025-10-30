import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ShieldCheck, CreditCard, Building2 } from "lucide-react";

const Footer = ({ navigate }) => {
  return (
    <footer className="relative bg-black text-gray-400 border-t border-white/10 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
        
        {/* 🧭 Brand & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white select-none">
            STRIDE<span className="text-red-600">.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed max-w-xs text-gray-400">
            Empowering change through small, consistent actions.{" "}
            <br />
            <span className="text-white/80">Donate. Learn. Grow. Every Monday.</span>
          </p>
        </motion.div>

        {/* ⚡ Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "How It Works", "Donate", "My Summaries"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => navigate(item)}
                  className="relative group hover:text-white transition-colors"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-emerald-400 to-green-500 transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ⚖️ Legal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-white font-semibold text-lg mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            {[
              ["Privacy Policy", "PrivacyPolicy"],
              ["Terms & Conditions", "TermsConditions"],
              ["Refund & Cancellation Policy", "RefundPolicy"],
              ["Contact / Grievance", "Contact"],
            ].map(([label, route]) => (
              <li key={route}>
                <button
                  onClick={() => navigate(route)}
                  className="relative group hover:text-white transition-colors"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-emerald-400 to-green-500 transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ☎️ Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-white font-semibold text-lg mb-3">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>support@strideindia.org</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 mt-1" />
              <span>
                Stride Foundation,<br /> Belagavi, Karnataka
              </span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* 🔰 Trust & Compliance Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="border-t border-white/10 mt-8"
      >
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-center gap-5 text-xs sm:text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-emerald-400" />
            <span>Verified Payments via Instamojo</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Data Secured by Firebase</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>STRIDE is a Registered MSME</span>
          </div>
        </div>
      </motion.div>

      {/* ⚫ Bottom Bar */}
      <motion.div
        className="text-center py-5 text-xs sm:text-sm flex flex-col sm:flex-row justify-center items-center gap-2 text-gray-500 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p>© {new Date().getFullYear()} STRIDE. All rights reserved.</p>
        <span className="hidden sm:inline mx-2">•</span>
        <p>
          Made with ❤️ in{" "}
          <span className="text-emerald-400 font-semibold">India</span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
