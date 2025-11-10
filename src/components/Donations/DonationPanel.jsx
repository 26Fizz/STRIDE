// src/components/Donation/DonationPanel.jsx
import React, { useState, useMemo } from "react";
import { BOOK_MAP } from "../../data/books";
import { getDayInfo } from "../../utils/date";
import DayToggle from "./DayToggle";
import BookSelectionGrid from "./BookSelectionGrid";
import PledgeAmountInput from "./PledgeAmountInput";
import { useNavigate } from "react-router-dom";
import { IndianRupeeIcon } from "../../icons/icons";
import { useAuth } from "../../hooks/useAuth";
import { unlockSummary } from "../../Firebase/firestoreHelpers";
import { motion } from "framer-motion";

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

  const authUser = useAuth();
  const navigate = useNavigate();

  // 🗓️ Get current day
  const { dayName, dateString } = useMemo(() => getDayInfo(), []);
  const today = new Date().getDay();
  const isMonday = today === 1;
  const isDonationActive = isSimulatingMonday || isMonday;

  const selectedBook = BOOK_MAP[selectedBookId];

  // 🧠 STRIDE IMPACT QUOTES
  const IMPACT_QUOTES = [
    // A — Meaning & Modern Life
    "Some days build your resume. Mondays build your character.",
    "STRIDE is how you stay human in a world that keeps numbing you.",
    "The world doesn’t change on Mondays — but you slowly do.",
    "Every STRIDE is a vote for the person you want to become.",
    "Purpose isn’t found. It’s practiced.",

    // B — Habit, Discipline & Micro-Impact
    "Goodness is hard only until it becomes routine.",
    "You don’t need motivation when you have a ritual — STRIDE is that ritual.",
    "Small disciplined acts create disproportionate lives.",
    "Impact is a rhythm. STRIDE sets the tempo.",
    "Your Mondays are tiny — but what they shape isn’t.",

    // C — Youth & Emotional Reality
    "Our generation isn’t lost — just directionless. STRIDE gives direction.",
    "You’re not too young to matter. You’re too young to wait.",
    "STRIDE is for everyone who feels ‘I want to help, but I don’t know how.’",
    "If you’ve ever felt powerless, this is your daily antidote.",
    "Overthinking creates fear. Small actions create identity.",

    // D — India & Collective Culture
    "Movements don’t start big — they start weekly.",
    "When you STRIDE, you add one more heartbeat to India’s change.",
    "Not all patriotism is loud. Some of it costs ₹10 on a Monday.",
    "India doesn’t need heroes. It needs habits.",
    "Imagine a country that shows up together. That’s what STRIDE is building.",

    // E — Psychology & Modern Life
    "We’re drowning in noise. STRIDE is one clean signal.",
    "Your brain needs meaning the way your body needs water.",
    "Scrolling numbs you. STRIDE awakens you.",
    "Consistency is the new confidence.",
    "If discipline had a softer side, it would look like STRIDE.",

    // F — Philosophy & Depth
    "A meaningful life is built in quiet Mondays.",
    "Peace comes from knowing you showed up.",
    "Every STRIDE is a small prayer in motion.",
    "Impact is not a destination — it’s a posture.",
    "Who you are is shaped by what you show up for.",

    // STRIDE Core
    "STRIDE makes doing good feel natural, not forced.",
    "You’re not donating. You’re calibrating your identity.",
    "STRIDE is what people with quiet strength do.",
    "This isn’t philanthropy — it’s self-respect.",
    "STRIDE is how you stay anchored in a world that keeps shaking you.",
    "We turned goodwill into a weekly ritual anyone can hold.",
    "You don’t STRIDE for applause. You STRIDE for alignment.",
    "STRIDE is a rebellion against apathy — gentle, but firm.",
    "Goodness needs a system. Not a mood.",
    "If you feel lost, STRIDE gives you a small place to begin.",
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

  // ⏳ Cycle through quotes every 5 seconds (only when not Monday)
  useEffect(() => {
    if (!isDonationActive) {
      const interval = setInterval(() => {
        setQuoteIndex((prev) => (prev + 1) % IMPACT_QUOTES.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isDonationActive]);

 
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
    if (!amount || amount < 1) {
      setMessage({ type: "error", text: "Please enter a valid amount (minimum ₹10." });
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

        {/* Main Card */}
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
