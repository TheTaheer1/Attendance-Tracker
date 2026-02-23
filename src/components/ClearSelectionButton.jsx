import React from 'react';

function ClearSelectionButton({ selectedCount, onClear }) {
  if (selectedCount === 0) return null;

  return (
    <div className="mb-6 flex justify-center">
      <button
        onClick={onClear}
        className="
          bg-gradient-to-r from-yellow-500 to-orange-500
          text-white font-bold py-3 px-8 rounded-full
          shadow-lg hover:shadow-2xl
          transform hover:scale-105 transition-all duration-300
          flex items-center gap-2
        "
      >
        <span>🗑️</span>
        <span>Clear Selection ({selectedCount} selected)</span>
      </button>
    </div>
  );
}

export default ClearSelectionButton;
