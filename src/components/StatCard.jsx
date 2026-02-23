import React from 'react';

// Simple component to show statistics numbers
function StatCard({ icon, label, value, color }) {
  return (
    <div className={`bg-gradient-to-br ${color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}>
      <div className="text-4xl mb-2 text-center">{icon}</div>
      <div className="text-white/80 text-sm font-semibold text-center mb-1">
        {label}
      </div>
      <div className="text-white text-3xl font-black text-center">
        {value}
      </div>
    </div>
  );
}

export default StatCard;
