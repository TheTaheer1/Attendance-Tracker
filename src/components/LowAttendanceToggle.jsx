import React from 'react';

function LowAttendanceToggle({ showLowAttendance, toggleLowAttendance }) {
  return (
    <button
      onClick={toggleLowAttendance}
      className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
        showLowAttendance
          ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/50'
          : 'bg-white/20 text-red-200 border-2 border-red-400/50'
      }`}
    >
      {showLowAttendance ? '✓ Low Attendance' : '⚠️ Show Low Attendance'}
    </button>
  );
}

export default LowAttendanceToggle;
