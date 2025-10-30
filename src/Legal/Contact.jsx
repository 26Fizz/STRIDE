// src/Pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Shield, UserCheck } from "lucide-react";
import PageWrapper from "../components/Layout/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper title="Contact / Grievance">
      <section className="relative bg-black text-gray-300 min-h-[85vh] flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-transparent to-emerald-900/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[600px] bg-emerald-600/10 blur-[160px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Contact & Grievance Redressal
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            We’re here to listen — and ensure complete transparency, fairness, and trust.
            Reach out to us for any concerns, queries, or legal requests.
          </p>
        </motion.div>

        {/* Info Section */}
        <div className="relative z-10 mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Office */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 text-center shadow-xl backdrop-blur-md"
          >
            <MapPin className="w-8 h-8 mx-auto text-emerald-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Registered Office</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              STRIDE Ventures (India) <br />
              Belagavi, Karnataka – 590001
            </p>
          </motion.div>

          {/* Support */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 text-center shadow-xl backdrop-blur-md"
          >
            <Mail className="w-8 h-8 mx-auto text-emerald-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Support Email</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="text-emerald-400 font-medium">support@strideimpact.in</span>
              <br />
              or <br />
              <span className="text-emerald-400 font-medium">support@strideindia.org</span>
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 text-center shadow-xl backdrop-blur-md"
          >
            <Phone className="w-8 h-8 mx-auto text-emerald-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Helpline</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              📞 +91 98765 43210 <br />
              Mon – Fri, 10 AM to 6 PM
            </p>
          </motion.div>

          {/* Grievance Officer */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-zinc-900/40 border border-white/10 rounded-2xl p-6 text-center shadow-xl backdrop-blur-md sm:col-span-2 lg:col-span-3"
          >
            <Shield className="w-8 h-8 mx-auto text-emerald-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Grievance Officer
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              <UserCheck className="inline w-4 h-4 mr-1 text-emerald-400" />
              <span className="font-medium text-white">Mr. Hafiz Patel</span> (Founder, STRIDE Ventures)
              <br />
              📧 <span className="text-emerald-400">grievance@strideimpact.in</span>
              <br />
              All complaints are acknowledged within{" "}
              <span className="text-emerald-400">7 working days</span>.
            </p>
          </motion.div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative z-10 mt-12 max-w-2xl text-center text-xs sm:text-sm text-gray-500 leading-relaxed"
        >
          STRIDE Ventures is a registered MSME startup initiative based in India.  
          All user data is securely handled via Firebase and compliant with Indian Data Protection Guidelines.  
          Payments are processed through verified partners such as <span className="text-emerald-400">Instamojo</span>.
        </motion.p>
      </section>
    </PageWrapper>
  );
};

export default Contact;
