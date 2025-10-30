// src/components/Donation/DonationPanel.jsx
import React, { useState, useMemo } from "react";
import { BOOK_MAP } from "../../data/books";
import { getDayInfo } from "../../utils/date";
import DayToggle from "./DayToggle";
import BookSelectionGrid from "./BookSelectionGrid";
import PledgeAmountInput from "./PledgeAmountInput";
import { IndianRupeeIcon, LoaderIcon } from "../../icons/icons";
import { useAuth } from "../../hooks/useAuth";
import { unlockSummary } from "../../Firebase/firestoreHelpers";
import { motion } from "framer-motion";

const DonationPanel = ({
  isDonationActive,
  isSimulatingMonday,
  toggleSimulateMonday,
  selectedBookId,
  setSelectedBookId,
  onUnlockSummary,
}) => {
  const [amount, setAmount] = useState(10);
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState(null);

  const authUser = useAuth();
  const { dayName, dateString } = useMemo(() => getDayInfo(), []);
  const selectedBook = BOOK_MAP[selectedBookId];

  const handleDonateClick = async () => {
    setMessage(null);

    if (!isDonationActive) {
      setMessage({ type: "error", text: "Donations are allowed only on Mondays." });
      return;
    }
    if (!selectedBookId) {
      setMessage({ type: "error", text: "Please select a book before donating." });
      return;
    }
    if (!amount || amount < 1) {
      setMessage({ type: "error", text: "Please enter a valid amount (minimum ₹10." });
      return;
    }
    if (!authUser) {
      setMessage({ type: "error", text: "Please login or sign up to donate." });
      return;
    }

    setIsProcessing(true);
    try {
      await unlockSummary(authUser.uid, selectedBookId, Number(amount));
      setMessage({
        type: "success",
        text: `Thank you! ${selectedBook?.title || "Summary"} unlocked.`,
      });
      if (typeof onUnlockSummary === "function") {
        onUnlockSummary(selectedBookId, Number(amount));
      }
    } catch (err) {
      console.error("Donation failed:", err);
      setMessage({ type: "error", text: err?.message || "Donation failed. Try again." });
    } finally {
      setIsProcessing(false);
    }
  };

  const isDisabled = !isDonationActive || isProcessing || !selectedBookId || amount < 1;

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[95vh] px-6 py-20 bg-black text-white overflow-hidden">
      {/* 🌿 Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-green-400/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[450px] h-[450px] bg-emerald-500/20 blur-[180px] rounded-full"></div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          {isDonationActive ? "Give. Grow. Repeat." : `Today is ${dayName}`}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Every Monday, STRIDE drops a real cause. You donate ₹10 and unlock 3 minutes of wisdom that changes how you think, while changing how someone lives.
        </p>

        {/* Day Toggle */}
        <div className="mb-8">
          <DayToggle
            isSimulatingMonday={isSimulatingMonday}
            toggleSimulateMonday={toggleSimulateMonday}
            dateString={dateString}
            dayName={dayName}
          />
        </div>

        {/* Main Card */}
        <div className="bg-[#0e0e0e]/70 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 space-y-10">
          {/* Step 1: Book Selection */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-100">1️⃣ Select Your Read</h3>
            <BookSelectionGrid selectedBookId={selectedBookId} setSelectedBookId={setSelectedBookId} />
          </div>

          {/* Step 2: Pledge Amount */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-100">2️⃣ This Monday, Create Real Impact</h3>
            <PledgeAmountInput amount={amount} setAmount={setAmount} />
          </div>

          <div className="mt-8 flex justify-center">
  <button
    onClick={() => {
      if (!isProcessing && amount < 10) {
        alert("⚠️ Minimum donation amount is ₹10. Please increase your pledge.");
        return;
      }
      handleDonateClick();
    }}
    disabled={isDisabled || isProcessing}
    className={`relative w-full max-w-md flex items-center justify-center gap-2 py-4 text-lg font-semibold rounded-xl transition-all duration-300 overflow-hidden
      ${
        isDisabled
          ? "bg-gray-800 text-gray-500 cursor-not-allowed"
          : "bg-red-600 text-white hover:scale-[1.03] shadow-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
      }`}
  >
    {isProcessing ? (
      <>
        <LoaderIcon className="animate-spin h-5 w-5 text-white" />
        Processing Donation...
      </>
    ) : (
      <>
        <IndianRupeeIcon className="h-5 w-5" />
        {`Take Your STRIDE`}
      </>
    )}

    {/* ✨ Soft glare shimmer effect */}
    {!isDisabled && (
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-glare pointer-events-none" />
    )}
  </button>

  {/* Glare Animation */}
  <style>
    {`
      @keyframes glareMove {
        0% { transform: translateX(-100%); }
        50% { transform: translateX(100%); }
        100% { transform: translateX(100%); }
      }
      .animate-glare {
        animation: glareMove 4s ease-in-out infinite;
      }
    `}
  </style>
</div>

          {/* Message */}
          {message && (
            <div
              className={`mt-4 text-sm px-4 py-2 rounded-lg ${
                message.type === "success"
                  ? "bg-green-100/10 text-green-400 border border-green-600/30"
                  : "bg-red-100/10 text-red-400 border border-red-600/30"
              }`}
            >
              {message.text}
            </div>
          )}

          <p className="text-xs text-gray-500 text-center mt-6">
            Payments verified by <b>Instamojo</b> • Data secured by <b>Firebase</b>  
            <br />Stride is a registered <b>MSME</b> entity.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default DonationPanel;
