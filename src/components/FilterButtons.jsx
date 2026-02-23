import React from 'react';

function FilterButtons({ filterType, setFilterType }) {
  return (
    <div className="flex gap-3 flex-wrap">
      {/* All button */}
      <button
        onClick={() => setFilterType('All')}
        className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
          filterType === 'All'
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
            : 'bg-white/20 text-purple-200 border-2 border-purple-400/50'
        }`}
      >
        📚 All
      </button>

      {/* Present button */}
      <button
        onClick={() => setFilterType('Present')}
        className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
          filterType === 'Present'
            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/50'
            : 'bg-white/20 text-green-200 border-2 border-green-400/50'
        }`}
      >
        ✅ Present
      </button>

      {/* Absent button */}
      <button
        onClick={() => setFilterType('Absent')}
        className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
          filterType === 'Absent'
            ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg shadow-red-500/50'
            : 'bg-white/20 text-red-200 border-2 border-red-400/50'
        }`}
      >
        ⚠️ Absent
      </button>
    </div>
  );
}

export default FilterButtons;
