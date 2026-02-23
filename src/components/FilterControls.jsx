import React from 'react';
import FilterButtons from './FilterButtons';
import LowAttendanceToggle from './LowAttendanceToggle';
import SortButton from './SortButton';

function FilterControls({ filterType, setFilterType, showLowAttendance, toggleLowAttendance, sortBy, toggleSort }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-6 border-2 border-cyan-500/30">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Filter Buttons */}
        <FilterButtons 
          filterType={filterType}
          setFilterType={setFilterType}
        />

        {/* Right Side Controls */}
        <div className="flex items-center gap-3">
          {/* Low Attendance Toggle */}
          <LowAttendanceToggle 
            showLowAttendance={showLowAttendance}
            toggleLowAttendance={toggleLowAttendance}
          />

          {/* Sort Button */}
          <SortButton 
            sortBy={sortBy}
            toggleSort={toggleSort}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterControls;
