// src/Pages/PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Database, Mail, FileText } from "lucide-react";
import PageWrapper from "../components/Layout/PageWrapper";

const PrivacyPolicy = () => {
  return (
    <PageWrapper title="Privacy Policy">
      <section className="relative bg-black text-gray-300 min-h-[85vh] flex flex-col items-center px-6 py-16 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-transparent to-emerald-900/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[600px] bg-emerald-600/10 blur-[160px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            ⚖️ <span className="text-emerald-400">Last updated: October 2025</span>
            <br />
            Your privacy is not just protected — it’s respected.  
            Here’s how we handle your data with transparency and care.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="relative z-10 max-w-4xl space-y-10">
          {/* 1️⃣ Information We Collect */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">
                1️⃣ Information We Collect
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              When you join STRIDE or make a payment, we may collect:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-1">
              <li>Your name, email address, and phone number.</li>
              <li>Payment details (processed securely by Instamojo or our payment partner).</li>
              <li>Non-personal data like browser type, device info, and Firebase analytics data.</li>
            </ul>
            <p className="text-gray-400 text-sm mt-3 italic">
              We never store or view your full UPI/card details — all transactions are securely handled by our payment partners.
            </p>
          </motion.div>

          {/* 2️⃣ How We Use Your Information */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">
                2️⃣ How We Use Your Information
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your data helps us create a better and more transparent STRIDE experience. We use it to:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-1">
              <li>Manage your STRIDE profile and weekly streaks.</li>
              <li>Process donations or subscriptions securely.</li>
              <li>Deliver verified impact updates and weekly reading capsules.</li>
              <li>Enhance user experience via analytics and feedback.</li>
            </ul>
          </motion.div>

          {/* 3️⃣ Data Security */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">3️⃣ Data Security</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your data is stored on encrypted servers powered by{" "}
              <span className="text-emerald-400">Google Firebase</span>.  
              We follow robust administrative and technical safeguards to prevent unauthorized access or misuse.
            </p>
          </motion.div>

          {/* 4️⃣ Sharing of Data */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">4️⃣ Sharing of Data</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We never sell or rent your personal information. Limited data is shared only with:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-1">
              <li>Payment gateways like Instamojo or Razorpay for secure processing.</li>
              <li>Verified NGOs or impact partners — strictly for transparency, never marketing.</li>
            </ul>
          </motion.div>

          {/* 5️⃣ Your Rights */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">5️⃣ Your Rights</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              You can request correction, access, or deletion of your personal data anytime by contacting:
            </p>
            <p className="text-emerald-400 text-sm mt-2 font-medium">
              📧 support@strideimpact.in
            </p>
          </motion.div>

          {/* 6️⃣ Updates */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              6️⃣ Policy Updates
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We may periodically update this Privacy Policy. The latest version will always be accessible on this page.
            </p>
          </motion.div>
        </div>

        {/* Closing Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative z-10 mt-12 max-w-2xl text-center text-xs sm:text-sm text-gray-500 leading-relaxed"
        >
          STRIDE Ventures (India) is committed to protecting every user’s data with transparency and responsibility.  
          Payments are secured through verified partners and all user activity is governed by India’s Digital Data Protection Act.
        </motion.p>
      </section>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
