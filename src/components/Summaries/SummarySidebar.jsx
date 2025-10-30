import React from "react";
import { motion } from "framer-motion";

const SummarySidebar = ({ sortedUnlockedBooks, viewingId, setViewingId }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    className="md:col-span-1 space-y-3 p-5 bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-lg h-fit md:sticky md:top-24 text-gray-200"
  >
    {/* Header */}
    <h3 className="text-lg font-semibold text-white border-b border-white/10 pb-2">
      Your Library <span className="text-gray-500">({sortedUnlockedBooks.length})</span>
    </h3>

    {/* Books List */}
    {sortedUnlockedBooks.map((book) => (
      <motion.button
        key={book.id}
        onClick={() => setViewingId(book.id)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`w-full text-left p-4 rounded-xl transition-all duration-300 border
          ${
            viewingId === book.id
              ? "bg-gradient-to-r from-red-600/90 to-red-500/80 text-white border-red-500 shadow-md"
              : "bg-[#111111] text-gray-300 border-white/10 hover:bg-white/5 hover:border-red-500/50 hover:text-white"
          }`}
      >
        <p className="font-semibold text-sm leading-tight">{book.title}</p>
        <p
          className={`text-[11px] italic mt-1 ${
            viewingId === book.id ? "text-red-200" : "text-gray-500"
          }`}
        >
          Pledged: ₹{book.amount} •{" "}
          {new Date(book.unlockedAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
          })}
        </p>
      </motion.button>
    ))}

    {/* Empty State */}
    {sortedUnlockedBooks.length === 0 && (
      <div className="text-gray-500 text-sm italic mt-6 text-center">
        You haven’t unlocked any summaries yet.
      </div>
    )}
  </motion.div>
);

export default SummarySidebar;
