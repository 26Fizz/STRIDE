// src/components/Summaries/SummaryDetailView.jsx
import React from 'react';
import SummaryContent from './SummaryContent';

const SummaryDetailView = ({ viewingBook }) => {
    if (!viewingBook) {
        return (
             <div className="p-6 text-center text-gray-500">Select a summary from the list.</div>
        );
    }
    
    return (
        <div className="md:col-span-3 p-6 bg-white rounded-xl shadow-2xl border-t-8 border-blue-600">
            <h1 className="text-4xl font-extrabold text-blue-700 mb-1">{viewingBook.title}</h1>
            <p className="text-lg text-gray-500 italic mb-4">By: {viewingBook.author}</p>
            
            <div className={`p-4 rounded-lg text-sm mb-6 ${viewingBook.color} bg-opacity-10 text-gray-700 border-l-4 border-blue-400`}>
                <span className="font-bold">Core Hook:</span> {viewingBook.hook}
            </div>

            <div className="summary-content">
                {viewingBook.summary.map((block, index) => (
                    <SummaryContent key={index} block={block} />
                ))}
            </div>
        </div>
    );
};

export default SummaryDetailView;