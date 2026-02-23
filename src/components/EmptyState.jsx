import React from 'react';

function EmptyState() {
  return (
    <div className="text-center py-16 bg-white/5 backdrop-blur-md rounded-3xl border-2 border-cyan-500/30">
      <div className="text-7xl mb-4">🔍</div>
      <h2 className="text-3xl font-bold text-cyan-300 mb-3">
        No students found
      </h2>
      <p className="text-cyan-200/70 text-lg">
        Try changing the filters
      </p>
    </div>
  );
}

export default EmptyState;
