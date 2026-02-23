import React from 'react';

// Component for main layout container
function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
