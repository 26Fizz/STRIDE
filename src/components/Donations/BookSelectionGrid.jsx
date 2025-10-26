import React from 'react';
import { FIVE_BOOKS_DATA, BOOK_MAP } from '../../data/books';
import { CheckCircleIcon } from '../../icons/icons';

const BookSelectionGrid = ({ selectedBookId, setSelectedBookId }) => {
  const selectedBook = BOOK_MAP[selectedBookId];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Step 1: Choose Your Knowledge Boost</h3>

      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
        {FIVE_BOOKS_DATA.map(book => (
          <button
            key={book.id}
            onClick={() => setSelectedBookId(book.id)}
            className={`relative p-3 rounded-xl border-4 transition-all duration-300 text-left flex flex-col justify-between
              ${selectedBookId === book.id
                ? 'border-blue-600 shadow-xl bg-blue-50/50 scale-[1.05] ring-4 ring-blue-300'
                : 'border-gray-200 hover:border-blue-300 bg-gray-50 hover:shadow-lg hover:scale-[1.02]'
              }`}
          >
            {selectedBookId === book.id && (
              <CheckCircleIcon className="absolute top-[-10px] right-[-10px] w-6 h-6 text-green-500 bg-white rounded-full border-2 border-green-500 shadow-md"/>
            )}
            <div className={`w-8 h-1 ${book.color} rounded-full mb-2`}></div>
            <p className="font-semibold text-xs sm:text-sm text-gray-800 leading-tight">{book.title}</p>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1 italic">by {book.author.split(' ')[0]}</p>
          </button>
        ))}
      </div>

      {selectedBook && (
        <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-blue-600 shadow-inner">
          <h4 className="text-lg font-bold text-gray-800">{selectedBook.title}</h4>
          <p className="text-sm text-gray-600 mt-1">{selectedBook.hook}</p>
        </div>
      )}
    </div>
  );
};

export default BookSelectionGrid;
