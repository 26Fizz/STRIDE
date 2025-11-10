import React, { useState, useMemo, useEffect } from "react";
import { BOOK_MAP } from "../../data/books";
import { getDayInfo } from "../../utils/date";
import DayToggle from "./DayToggle";
import BookSelectionGrid from "./BookSelectionGrid";
import PledgeAmountInput from "./PledgeAmountInput";
import { IndianRupeeIcon } from "../../icons/icons";
import { useAuth } from "../../hooks/useAuth";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Navigation hook

const DonationPanel = ({
  isSimulatingMonday,
  toggleSimulateMonday,
  selectedBookId,
  setSelectedBookId,
  onUnlockSummary,
}) => {
  const [amount, setAmount] = useState(10);
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const authUser = useAuth();
  const navigate = useNavigate();

  // 🗓️ Get current day
  const { dayName, dateString } = useMemo(() => getDayInfo(), []);
  const today = new Date().getDay();
  const isMonday = today === 1;
  const isDonationActive = isSimulatingMonday || isMonday;

  const selectedBook = BOOK_MAP[selectedBookId];

  // 🌿 STRIDE Quotes
  const IMPACT_QUOTES = [
    "Some days build your resume. Mondays build your character.",
    "STRIDE is how you stay human in a world that keeps numbing you.",
    "Every STRIDE is a vote for the person you want to become.",
    "Purpose isn’t found. It’s practiced.",
    "Goodness is hard only until it becomes routine.",
    "Small disciplined acts create disproportionate lives.",
    "Impact is a rhythm. STRIDE sets the tempo.",
    "Not all patriotism is loud. Some of it costs ₹10 on a Monday.",
    "India doesn’t need heroes. It needs habits.",
    "Your brain needs meaning the way your body needs water.",
    "Consistency is the new confidence.",
    "Peace comes from knowing you showed up.",
  ];

  // 🔁 Rotate quotes every 5s when not Monday
  useEffect(() => {
    if (!isDonationActive) {
      const interval = setInterval(() => {
        setQuoteIndex((prev) => (prev + 1) % IMPACT_QUOTES.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isDonationActive]);

  // 💸 Handle Donate Button
  const handleDonateClick = () => {
    if (!selectedBookId) {
      setMessage({ type: "error", text: "Please select a book before donating." });
      return;
    }

    if (!amount || amount < 10) {
      setMessage({ type: "error", text: "Minimum donation is ₹10." });
      return;
    }

    if (!authUser) {
      setMessage({ type: "error", text: "Please log in to donate." });
      return;
    }

    // ✅ Redirect to /payment page
    navigate("/payment", {
      state: {
        bookId: selectedBookId,
        bookTitle: selectedBook?.title,
        amount: amount,
        user: authUser.email || "Anonymous",
      },
    });
  };

  const isDisabled = !selectedBookId || amount < 1 || isProcessing;

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[95vh] px-6 py-20 bg-black text-white overflow-hidden">
      {/* 🌿 Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-green-400/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[450px] h-[450px] bg-emerald-500/20 blur-[180px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          {isDonationActive ? "Give. Grow. Repeat." : `Today is ${dayName}`}
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Every Monday, STRIDE drops a real cause. You donate ₹10 and unlock 3 minutes of wisdom that changes how you think — while changing how someone lives.
        </p>

        <div className="mb-8">
          <DayToggle
            isSimulatingMonday={isSimulatingMonday}
            toggleSimulateMonday={toggleSimulateMonday}
            dateString={dateString}
            dayName={dayName}
          />
        </div>

        {/* 🔒 Non-Monday View */}
        {!isDonationActive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-gray-900/60 to-black/80 backdrop-blur-lg border border-gray-800 rounded-3xl shadow-xl p-8 sm:p-10 mb-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              🚫 Donations open every Monday
            </h3>

            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="text-emerald-400 italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              >
                “{IMPACT_QUOTES[quoteIndex]}”
              </motion.p>
            </AnimatePresence>

            <p className="text-gray-400 text-sm mt-4">
              STRIDE isn’t built around urgency — it’s built around rhythm.  
              Every Monday, our community moves together to create small, consistent change.
            </p>
          </motion.div>
        )}

        {/* 💸 Donation UI */}
        <div className="bg-[#0e0e0e]/70 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl p-8 sm:p-12 space-y-10">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-100">
              1️⃣ Select Your Read
            </h3>
            <BookSelectionGrid
              selectedBookId={selectedBookId}
              setSelectedBookId={setSelectedBookId}
            />
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-100">
              2️⃣ This Monday, Create Real Impact
            </h3>
            <PledgeAmountInput amount={amount} setAmount={setAmount} />
          </div>

          {/* 🔘 Donate Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleDonateClick}
              disabled={isDisabled}
              className={`relative w-full max-w-md flex items-center justify-center gap-2 py-4 text-lg font-semibold rounded-xl transition-all duration-300 overflow-hidden
                ${
                  isDisabled
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed shadow-[0_0_20px_rgba(239,68,68,0.15)]"
                    : "bg-red-600 text-white hover:scale-[1.03] shadow-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
                }`}
            >
              <IndianRupeeIcon className="h-5 w-5" />
              {isDonationActive ? "Take Your STRIDE" : "We'll see you on Monday 🌿"}
            </button>
          </div>

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
            Payments verified by <b>Instamojo</b> • Data secured by <b>Firebase</b><br />
            STRIDE is a registered <b>MSME</b> entity.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default DonationPanel;
