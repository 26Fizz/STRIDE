// src/components/Donation/BookSelectionGrid.jsx
import React from "react";
import { motion } from "framer-motion";
import { FIVE_BOOKS_DATA, BOOK_MAP } from "../../data/books";
import { CheckCircleIcon } from "../../icons/icons";

const BookSelectionGrid = ({ selectedBookId, setSelectedBookId }) => {
  const selectedBook = BOOK_MAP[selectedBookId];

  return (
    <div className="space-y-6">
      {/* 🪶 Header */}
      <h3 className="text-xl sm:text-2xl font-bold text-white/90 border-b border-white/10 pb-2">
        Step 1: Choose Your Knowledge Boost 📘
      </h3>

      {/* 📚 Book Cards */}
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
        {FIVE_BOOKS_DATA.map((book) => {
          const isSelected = selectedBookId === book.id;
          return (
            <motion.button
              key={book.id}
              onClick={() => setSelectedBookId(book.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`relative p-4 rounded-2xl text-left flex flex-col justify-between transition-all duration-300 border
                ${
                  isSelected
                    ? "bg-gradient-to-br from-blue-600/80 to-blue-800/70 border-blue-400 shadow-[0_0_25px_-5px_rgba(59,130,246,0.6)]"
                    : "bg-black/40 border-white/10 hover:border-blue-400 hover:shadow-[0_0_20px_-8px_rgba(59,130,246,0.5)]"
                }`}
            >
              {/* ✅ Check Icon */}
              {isSelected && (
                <CheckCircleIcon className="absolute top-[-10px] right-[-10px] w-6 h-6 text-green-400 bg-black rounded-full border border-green-500 shadow-md" />
              )}

              {/* 🔹 Accent line */}
              <div className={`w-8 h-1 ${book.color} rounded-full mb-2 opacity-80`} />

              {/* 📖 Title */}
              <p
                className={`font-semibold text-xs sm:text-sm leading-tight ${
                  isSelected ? "text-white" : "text-gray-200"
                }`}
              >
                {book.title}
              </p>

              {/* 👤 Author */}
              <p
                className={`text-[10px] sm:text-xs mt-1 italic ${
                  isSelected ? "text-blue-200" : "text-gray-400"
                }`}
              >
                by {book.author.split(" ")[0]}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* 🧠 Selected Book Info */}
      {selectedBook && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 bg-black/50 rounded-2xl border border-blue-500/40 text-white/90 shadow-inner backdrop-blur-md"
        >
          <h4 className="text-lg font-bold text-blue-300">
            {selectedBook.title}
          </h4>
          <p className="text-sm text-gray-300 mt-1 leading-relaxed">
            {selectedBook.hook}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default BookSelectionGrid;
