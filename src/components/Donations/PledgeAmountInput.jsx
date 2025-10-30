// ✅ src/components/Donation/PledgeAmountInput.jsx
import React, { useState, useEffect } from "react";

const PledgeAmountInput = ({ amount, setAmount }) => {
  const presetAmounts = [10, 50, 100, 250, "custom"];
  const isCustomSelected = !presetAmounts.includes(amount);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (isCustomSelected && amount && amount < 10) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  }, [amount, isCustomSelected]);

  return (
    <div className="space-y-5">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-100 border-b border-gray-800 pb-2">
        Step 2️⃣: Pledge Your Amount (INR)
      </h3>

      {/* 💰 Preset Amount Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {presetAmounts.map((val) => (
          <button
            key={val}
            onClick={() => setAmount(val === "custom" ? "" : val)}
            className={`py-3 rounded-xl border text-base font-medium transition-all duration-200 hover:scale-[1.02]
              ${
                (val === "custom" && isCustomSelected) || amount === val
                  ? "bg-emerald-500 text-white border-transparent shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "bg-[#111] text-gray-300 border-gray-700 hover:border-emerald-400/60 hover:text-white"
              }`}
          >
            {val === "custom" ? "Custom (₹)" : `₹${val}`}
          </button>
        ))}
      </div>

      {/* 🧾 Custom Input Field */}
      {isCustomSelected && (
        <div className="flex flex-col sm:flex-row items-center gap-3 animate-fadeIn">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter custom amount (₹10 minimum)"
            className="w-full p-3 bg-[#0b0b0b] text-gray-100 border border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition shadow-inner"
            min="1"
          />
        </div>
      )}

      {/* ⚠️ Warning Message */}
      {showWarning && (
        <p className="text-xs text-red-400 text-center">
          Minimum donation amount is ₹10.
        </p>
      )}

      <p className="text-xs text-gray-500 mt-2 text-center">
        You can donate any amount — but amounts below ₹10 won’t be processed 🌱
      </p>
    </div>
  );
};

export default PledgeAmountInput;
