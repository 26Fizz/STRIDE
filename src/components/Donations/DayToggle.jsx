import React from 'react';

const DayToggle = ({ isSimulatingMonday, toggleSimulateMonday, dateString, dayName }) => (
    <div className="flex flex-col items-center mb-10">
        <p className="text-center text-sm sm:text-base text-gray-500 mb-4">
            Current Date: {dateString}
        </p>

        <div className="flex rounded-full overflow-hidden border border-gray-300 shadow-sm">
            <button
                onClick={() => isSimulatingMonday && toggleSimulateMonday()}
                className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 
                    ${!isSimulatingMonday ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
                Real Day ({dayName})
            </button>

            <button
                onClick={() => !isSimulatingMonday && toggleSimulateMonday()}
                className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 
                    ${isSimulatingMonday ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
                Simulate Monday
            </button>
        </div>
    </div>
);

export default DayToggle;
