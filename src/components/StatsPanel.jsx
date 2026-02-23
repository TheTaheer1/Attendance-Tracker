import React from 'react';
import StatCard from './StatCard';

function StatsPanel({ total, present, absent, filtered, selected }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      {/* Total students card */}
      <StatCard
        icon="👥"
        label="Total Students"
        value={total}
        color="from-purple-500 to-pink-500"
      />
      
      {/* Present students card */}
      <StatCard
        icon="✅"
        label="Present (≥75%)"
        value={present}
        color="from-green-500 to-emerald-500"
      />
      
      {/* Absent students card */}
      <StatCard
        icon="⚠️"
        label="Absent (<75%)"
        value={absent}
        color="from-red-500 to-rose-500"
      />
      
      {/* Filtered results card */}
      <StatCard
        icon="�"
        label="Filtered Results"
        value={filtered}
        color="from-cyan-500 to-blue-500"
      />
      
      {/* Selected students card */}
      <StatCard
        icon="📌"
        label="Selected"
        value={selected}
        color="from-yellow-500 to-orange-500"
      />
    </div>
  );
}

export default StatsPanel;
