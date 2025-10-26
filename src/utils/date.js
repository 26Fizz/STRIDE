// src/utils/date.js

export const getDayInfo = () => {
  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  return {
    isMonday: today.getDay() === 1, // 1 is Monday in JS (0 is Sunday)
    dayName: today.toLocaleDateString('en-US', { weekday: 'long' }),
    dateString: today.toLocaleDateString('en-US', options),
  };
};