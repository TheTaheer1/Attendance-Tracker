import React from 'react';

function StudentCard({ student, isSelected, onClick }) {
  // Determine status color based on attendance percentage
  const getStatusColor = (attendance) => {
    if (attendance >= 75) {
      return {
        bg: 'from-green-500 to-emerald-600',
        badge: 'bg-green-500',
        text: 'Present',
        ring: 'ring-green-500/50',
      };
    } else {
      return {
        bg: 'from-red-500 to-rose-600',
        badge: 'bg-red-500',
        text: 'Absent',
        ring: 'ring-red-500/50',
      };
    }
  };

  const status = getStatusColor(student.attendance);

  return (
    <div
      onClick={onClick}
      className={`
        bg-white/10 backdrop-blur-md rounded-2xl p-6 cursor-pointer
        transition-all duration-300 transform hover:scale-[1.02]
        border-2 ${isSelected ? 'border-cyan-400 ring-4 ring-cyan-400/50 shadow-2xl shadow-cyan-500/50' : 'border-purple-500/30'}
        hover:shadow-xl
      `}
    >
      <div className="flex items-center justify-between mb-4">
        {/* Student Info */}
        <div className="flex-1">
          <h3 className="text-white text-xl font-bold mb-1 flex items-center gap-2">
            {isSelected && <span className="text-cyan-400">📌</span>}
            {student.name}
          </h3>
          <p className="text-cyan-200 text-sm">📧 {student.email}</p>
          <p className="text-purple-300 text-sm">📍 {student.city}</p>
        </div>

        {/* Attendance Percentage */}
        <div className="text-center">
          <div className={`
            w-20 h-20 rounded-full bg-gradient-to-br ${status.bg}
            flex items-center justify-center shadow-lg
            transform transition-transform hover:rotate-12
          `}>
            <div className="text-center">
              <div className="text-white text-2xl font-black">{student.attendance}%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <div className="flex items-center justify-between">
        <span className={`
          ${status.badge} text-white px-4 py-2 rounded-full
          font-bold text-sm shadow-md
        `}>
          {student.attendance >= 75 ? '✅ ' : '⚠️ '}{status.text}
        </span>

        {/* Attendance Bar */}
        <div className="flex-1 ml-4">
          <div className="bg-white/20 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${status.bg} transition-all duration-500`}
              style={{ width: `${student.attendance}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Selected Indicator */}
      {isSelected && (
        <div className="mt-4 p-3 bg-cyan-500/20 border-2 border-cyan-400 rounded-lg">
          <p className="text-cyan-100 text-sm text-center font-semibold">
            ✨ Selected Student
          </p>
        </div>
      )}
    </div>
  );
}

export default StudentCard;
