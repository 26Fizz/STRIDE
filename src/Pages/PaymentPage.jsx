// src/pages/PaymentPage.jsx
import React, { useEffect, useState } from "react";
import { QrCode, Copy, CheckCircle2, Download } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";

const STRIDE_UPI = "strideventures@ybl";

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const authUser = useAuth();

  const [amount] = useState(state?.amount || 10);
  const [isMobile, setIsMobile] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    setIsMobile(/android|iphone|ipad|ipod/.test(ua));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyUPI = () => {
    navigator.clipboard.writeText(STRIDE_UPI);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const saveQR = () => {
    const link = document.createElement("a");
    link.href = "/qr.jpg";
    link.download = "STRIDE_UPI_QR.jpg";
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-b from-neutral-900 to-black border border-white/10 shadow-xl rounded-3xl p-8 w-full max-w-md text-center"
      >
        <CheckCircle2 className="mx-auto text-green-400 w-16 h-16 mb-4" />

        <h1 className="text-3xl font-bold mb-3">Complete Your Donation</h1>

        <p className="text-gray-400 mb-8 leading-relaxed">
          STRIDE uses{" "}
          <span className="text-white font-semibold">direct UPI transfers</span> —
          a conscious design choice to keep contributions{" "}
          <span className="text-white font-semibold">simple, fast, and transparent.</span>
        </p>

        {/* WHY DIRECT UPI */}
        <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-8 text-left">
          <p className="text-gray-300 text-sm leading-relaxed">
            To stay{" "}
            <span className="font-semibold text-white">radically transparent</span>,
            we use direct UPI ensuring{" "}
            <span className="font-semibold text-white">
              100% of your contribution
            </span>{" "}
            reaches the work we show you. No cuts. No processing fees.
            <br /><br />
            A more seamless system is underway, but for now, this remains the most{" "}
            <span className="font-semibold text-white">reliable and intentional</span>{" "}
            version of the ritual.
          </p>
        </div>

        {/* DONATION SUMMARY */}
        <div className="mb-6 bg-white/5 p-4 rounded-xl border border-white/10">
          <p className="text-gray-300">
            <span className="font-semibold">Amount:</span>{" "}
            <span className="text-green-400">₹{amount}</span>
          </p>
          <p className="text-gray-300 mt-1">
            <span className="font-semibold">UPI ID:</span>{" "}
            <span className="text-blue-400">{STRIDE_UPI}</span>
          </p>
        </div>

        {/* PROFESSIONAL NEW TEXT INSTEAD OF BUTTON */}
        <p className="text-sm text-gray-400 mb-4">
          Paste this UPI ID in any UPI app to contribute.
        </p>

        {/* COPY UPI BUTTON */}
        <button
          onClick={copyUPI}
          className="w-full py-3 rounded-xl bg-white text-black flex justify-center items-center gap-2 font-semibold hover:bg-gray-200 transition"
        >
          {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
          {copied ? "UPI ID Copied" : "Copy UPI ID"}
        </button>

        {/* QR CODE (DESKTOP ONLY) */}
        {!isMobile && (
          <div className="mt-10 border-t border-white/10 pt-6">
            <button
              onClick={() => setShowQR(!showQR)}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold transition"
            >
              <QrCode className="w-5 h-5" />
              {showQR ? "Hide QR Code" : "Show QR Code"}
            </button>

            <AnimatePresence>
              {showQR && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-6"
                >
                  <img
                    src="/qr.jpg"
                    alt="STRIDE UPI QR"
                    className="w-52 h-52 mx-auto rounded-lg border border-gray-700 shadow-lg mb-4"
                  />

                  <button
                    onClick={saveQR}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
                  >
                    <Download className="w-5 h-5" />
                    Save QR Code
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-xs text-gray-500 mt-6 leading-relaxed">
              If UPI apps don’t open automatically, scan the QR or paste the UPI ID manually.
            </p>
          </div>
        )}

        <button
          onClick={() => navigate("/")}
          className="mt-10 w-full py-2 text-gray-500 hover:text-white transition"
        >
          Cancel
        </button>

        <p className="text-xs text-gray-500 mt-4">
          STRIDE • A New India Begins With You
        </p>
      </motion.div>
    </div>
  );
};

export default PaymentPage;
