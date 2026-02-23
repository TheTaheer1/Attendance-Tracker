import React from 'react';

function StatsPanel({ total, present, absent, filtered, selected }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      <StatCard
        icon="👥"
        label="Total Students"
        value={total}
        gradient="from-purple-500 to-pink-500"
      />
      <StatCard
        icon="✅"
        label="Present (≥75%)"
        value={present}
        gradient="from-green-500 to-emerald-500"
      />
      <StatCard
        icon="⚠️"
        label="Absent (<75%)"
        value={absent}
        gradient="from-red-500 to-rose-500"
      />
      <StatCard
        icon="🔍"
        label="Filtered Results"
        value={filtered}
        gradient="from-cyan-500 to-blue-500"
      />
      <StatCard
        icon="📌"
        label="Selected"
        value={selected}
        gradient="from-yellow-500 to-orange-500"
      />
    </div>
  );
}

function StatCard({ icon, label, value, gradient }) {
  return (
    <div className={`
      bg-gradient-to-br ${gradient} rounded-2xl p-6
      shadow-lg hover:shadow-2xl transition-all duration-300
      transform hover:scale-105 cursor-pointer
    `}>
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

export default StatsPanel;
