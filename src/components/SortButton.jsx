import React from 'react';

function SortButton({ sortBy, toggleSort }) {
  return (
    <button
      onClick={toggleSort}
      className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
        sortBy === 'attendance'
          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/50'
          : 'bg-white/20 text-green-200 border-2 border-green-400/50'
      }`}
    >
      {sortBy === 'attendance' ? '✓ Sorted by %' : '📊 Sort by %'}
    </button>
  );
}

export default SortButton;
