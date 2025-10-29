// src/components/Donation/DonationPanel.jsx
import React, { useState, useMemo } from 'react';
import { BOOK_MAP } from '../../data/books';
import { getDayInfo } from '../../utils/date';
import DayToggle from './DayToggle';
import BookSelectionGrid from './BookSelectionGrid';
import PledgeAmountInput from './PledgeAmountInput';
import { DollarSignIcon, LoaderIcon } from '../../icons/icons';
import { useAuth } from '../../hooks/useAuth';
import { unlockSummary } from '../../Firebase/firestoreHelpers';

const DonationPanel = ({
  isDonationActive,
  isSimulatingMonday,
  toggleSimulateMonday,
  selectedBookId,
  setSelectedBookId,
  onUnlockSummary
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
      setMessage({ type: 'error', text: 'Donations are allowed only on Mondays.' });
      return;
    }
    if (!selectedBookId) {
      setMessage({ type: 'error', text: 'Please select a book before donating.' });
      return;
    }
    if (!amount || amount < 1) {
      setMessage({ type: 'error', text: 'Please enter a valid amount (minimum $1).' });
      return;
    }
    if (!authUser) {
      setMessage({ type: 'error', text: 'Please login or sign up to donate.' });
      return;
    }

    setIsProcessing(true);
    try {
      await unlockSummary(authUser.uid, selectedBookId, Number(amount));

      setMessage({ type: 'success', text: `Thank you! ${selectedBook?.title || 'Summary'} unlocked.` });

      if (typeof onUnlockSummary === 'function') {
        onUnlockSummary(selectedBookId, Number(amount));
      }
    } catch (err) {
      console.error('Donation failed:', err);
      setMessage({ type: 'error', text: err?.message || 'Donation failed. Try again.' });
    } finally {
      setIsProcessing(false);
    }
  };

  const isDisabled = !isDonationActive || isProcessing || !selectedBookId || amount < 1;

  return (
    <section className="container mx-auto px-4 py-8 sm:py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 text-center">
        {isDonationActive ? 'Momentum Day: Choose & Give' : `Today is ${dayName}.`}
      </h2>

      <DayToggle
        isSimulatingMonday={isSimulatingMonday}
        toggleSimulateMonday={toggleSimulateMonday}
        dateString={dateString}
        dayName={dayName}
      />

      <div className="max-w-3xl mx-auto p-6 sm:p-10 rounded-2xl bg-white border border-gray-100 shadow-xl space-y-6 relative z-0">

        {/* Step 1: Book Selection */}
        <BookSelectionGrid selectedBookId={selectedBookId} setSelectedBookId={setSelectedBookId} />

        {/* Step 2: Amount Selection */}
        <PledgeAmountInput amount={amount} setAmount={setAmount} />

        {/* Step 3: Donate Button */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleDonateClick}
            disabled={isDisabled}
            className={`w-full max-w-md flex items-center justify-center gap-2 py-4 text-lg font-semibold rounded-xl transition-all duration-200
              ${isDisabled
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed shadow-none'
                : 'bg-green-500 text-white hover:bg-green-600 shadow-lg'
              } z-10`}
          >
            {isProcessing ? (
              <>
                <LoaderIcon className="animate-spin h-5 w-5 text-white" />
                Processing Donation...
              </>
            ) : (
              <>
                <DollarSignIcon className="h-5 w-5" />
                {`Pledge $${amount} & Unlock ${selectedBook?.title || 'Summary'}`}
              </>
            )}
          </button>
        </div>

        {/* Step 4: Message */}
        {message && (
          <div className={`mt-4 text-sm px-4 py-2 rounded-lg ${
            message.type === 'success'
              ? 'bg-green-50 text-green-700 border border-green-100'
              : 'bg-red-50 text-red-700 border border-red-100'
          }`}>
            {message.text}
          </div>
        )}

        <p className="text-xs text-gray-500 text-center mt-3">
          100% of youth donations fund our weekly education initiatives.
        </p>
      </div>
    </section>
  );
};

export default DonationPanel;