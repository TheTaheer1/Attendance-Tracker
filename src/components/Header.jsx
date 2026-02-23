import React from 'react';

function Header() {
  return (
    <div className="text-center mb-8">
      <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
        🎓 Student Attendance Viewer
      </h1>
      <p className="text-cyan-200 text-lg font-medium">
        Track and manage student attendance records
      </p>
    </div>
  );
}

export default Header;
