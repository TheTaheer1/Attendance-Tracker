import React from 'react';

function FilterButtons({ filterType, setFilterType }) {
  const filters = ['All', 'Present', 'Absent'];

  const getButtonStyle = (filter) => {
    const isActive = filterType === filter;
    
    const styles = {
      All: isActive 
        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50' 
        : 'bg-white/20 text-purple-200 border-2 border-purple-400/50',
      Present: isActive 
        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/50' 
        : 'bg-white/20 text-green-200 border-2 border-green-400/50',
      Absent: isActive 
        ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white shadow-lg shadow-red-500/50' 
        : 'bg-white/20 text-red-200 border-2 border-red-400/50',
    };

    return styles[filter];
  };

  const getEmoji = (filter) => {
    const emojis = {
      All: '📚',
      Present: '✅',
      Absent: '⚠️',
    };
    return emojis[filter];
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setFilterType(filter)}
          className={`
            px-6 py-3 rounded-full font-bold text-lg
            transition-all duration-300 transform hover:scale-105
            ${getButtonStyle(filter)}
          `}
        >
          {getEmoji(filter)} {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
