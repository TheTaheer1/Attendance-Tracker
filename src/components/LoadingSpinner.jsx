import React from 'react';

function LoadingSpinner() {
  return (
    <div className="text-center py-12">
      <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-400"></div>
      <p className="text-cyan-200 mt-4 text-xl font-semibold">Loading students...</p>
    </div>
  );
}

export default LoadingSpinner;
