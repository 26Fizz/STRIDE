// src/Pages/RefundPolicy.jsx
import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Undo2, XCircle, AlertTriangle, Mail } from "lucide-react";
import PageWrapper from "../components/Layout/PageWrapper";

const RefundPolicy = () => {
  return (
    <PageWrapper title="Refund & Cancellation Policy">
      <section className="relative bg-black text-gray-300 min-h-[85vh] flex flex-col items-center px-6 py-16 overflow-hidden">
        {/* 🌿 Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-transparent to-emerald-900/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[600px] bg-emerald-600/10 blur-[160px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        {/* 🏁 Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            ⚖️ <span className="text-emerald-400">Last updated: October 2025</span>
            <br />
            Transparency and accountability guide every step we take — including payments and refunds.
          </p>
        </motion.div>

        {/* 📜 Policy Sections */}
        <div className="relative z-10 max-w-4xl space-y-10">
          {/* 1️⃣ Payments */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <CreditCard className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">1️⃣ Payments</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Once a user completes a payment through{" "}
              <span className="text-emerald-400">Instamojo</span> or any official
              STRIDE link, the transaction is considered final and cannot be
              reversed. All funds directly contribute to verified impact
              programs and digital content delivery.
            </p>
          </motion.div>

          {/* 2️⃣ Exceptions */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <Undo2 className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">2️⃣ Exceptions</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Refunds are only processed under exceptional cases such as:
            </p>
            <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-1">
              <li>Duplicate payments made accidentally (with proof).</li>
              <li>Technical transaction errors verified by Instamojo.</li>
            </ul>
            <p className="text-gray-400 text-sm mt-3 italic">
              Please email{" "}
              <span className="text-emerald-400 font-medium">
                billing@strideimpact.in
              </span>{" "}
              within 7 days of the transaction to request a review.
            </p>
          </motion.div>

          {/* 3️⃣ Cancellation */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <XCircle className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">3️⃣ Cancellation</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              You may cancel your upcoming weekly or monthly contribution anytime
              by stopping recurring payments. However, all previously completed
              transactions remain non-refundable as they immediately support our
              ongoing impact initiatives.
            </p>
          </motion.div>

          {/* 4️⃣ Disputes */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-emerald-400" />
              <h2 className="text-xl font-semibold text-white">4️⃣ Disputes</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Any payment-related disputes or chargebacks will be handled in
              accordance with{" "}
              <span className="text-emerald-400 font-medium">Instamojo’s</span>{" "}
              standard dispute resolution policy. STRIDE will fully cooperate to
              ensure fair and transparent resolution.
            </p>
          </motion.div>
        </div>

        {/* 📩 Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative z-10 mt-12 max-w-2xl text-center text-xs sm:text-sm text-gray-500 leading-relaxed"
        >
          For refund or billing queries, reach out to our support team at{" "}
          <span className="text-emerald-400 font-medium">
            billing@strideimpact.in
          </span>{" "}
          or{" "}
          <span className="text-emerald-400 font-medium">
            support@strideimpact.in
          </span>
          .  
          STRIDE Ventures (India) ensures every rupee is used responsibly and
          transparently.
        </motion.p>
      </section>
    </PageWrapper>
  );
};

export default RefundPolicy;
