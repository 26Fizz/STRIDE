import React from 'react';

const PledgeAmountInput = ({ amount, setAmount }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Step 2: Pledge Your Amount</h3>
    
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {[5, 10, 25, 50].map(val => (
        <button
          key={val}
          onClick={() => setAmount(val)}
          className={`py-3 rounded-xl border-2 font-semibold transition duration-200 hover:scale-[1.02]
            ${amount === val 
                ? 'bg-blue-600 text-white border-blue-600 shadow-lg ring-2 ring-blue-300' 
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
            }`}
        >
          ${val}
        </button>
      ))}
    </div>

    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount(Number(e.target.value))}
      placeholder="Custom Amount"
      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
      min="1"
    />
  </div>
);

export default PledgeAmountInput;
