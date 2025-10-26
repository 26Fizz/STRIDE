// src/components/Summaries/SummarySidebar.jsx
import React from 'react';

const SummarySidebar = ({ sortedUnlockedBooks, viewingId, setViewingId }) => (
    <div className="md:col-span-1 space-y-3 p-4 bg-gray-50 rounded-xl shadow-lg h-fit md:sticky md:top-20">
        <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Your Library ({sortedUnlockedBooks.length})</h3>
        {sortedUnlockedBooks.map(book => (
            <button
                key={book.id}
                onClick={() => setViewingId(book.id)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 border-2
                    ${viewingId === book.id 
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-[1.02]' 
                        : 'bg-white text-gray-800 border-gray-200 hover:bg-blue-50 hover:border-blue-400'
                    }`}
            >
                <p className="font-semibold text-sm leading-tight">{book.title}</p>
                <p className={`text-[10px] italic mt-1 ${viewingId === book.id ? 'text-blue-200' : 'text-gray-500'}`}>
                    Pledged: ${book.amount} on {new Date(book.unlockedAt).toLocaleDateString()}
                </p>
            </button>
        ))}
    </div>
);

export default SummarySidebar;