// src/components/Summaries/SummaryContent.jsx
import React from 'react';

const SummaryContent = ({ block }) => {
    switch (block.type) {
        case 'heading':
            return <h3 className="text-2xl font-bold text-gray-800 mb-2 mt-4 border-b pb-1">{block.content}</h3>;
        case 'quote':
            return <p className="italic text-lg text-gray-600 border-l-4 border-yellow-500 pl-4 py-2 my-4 bg-yellow-50 rounded-r-lg">"{block.content}"</p>;
        case 'text':
        default:
            return <p className="text-base text-gray-700 mb-3 leading-relaxed">{block.content}</p>;
    }
};

export default SummaryContent;