import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import StatsPanel from './components/StatsPanel';
import FilterControls from './components/FilterControls';
import ClearSelectionButton from './components/ClearSelectionButton';
import LoadingSpinner from './components/LoadingSpinner';
import EmptyState from './components/EmptyState';
import StudentList from './components/StudentList';
import Footer from './components/Footer';

function App() {
  // State Management - As per requirements
  const [students, setStudents] = useState([]);
  const [filterType, setFilterType] = useState('All'); // 'All', 'Present', 'Absent'
  const [selectedStudents, setSelectedStudents] = useState([]); // Array of selected student IDs
  const [showLowAttendance, setShowLowAttendance] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null); // null or 'attendance' (bonus feature)

  // Fetch student data using useEffect on mount
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        // Check if we have saved data in localStorage
        const savedStudents = localStorage.getItem('studentAttendance');

        if (savedStudents) {
          // Use saved data
          setStudents(JSON.parse(savedStudents));
          setLoading(false);
        } else {
          // Fetch fresh data and generate attendance
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');

          // Map users to students with random attendance %
          const studentsData = response.data.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.address.city,
            // Generate random attendance between 40% and 100%
            attendance: Math.floor(Math.random() * 61) + 40,
          }));

          // Save to localStorage
          localStorage.setItem('studentAttendance', JSON.stringify(studentsData));

          setStudents(studentsData);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Filter students based on selected filters
  const getFilteredStudents = () => {
    let filtered = [...students];

    // Filter by attendance status
    if (filterType === 'Present') {
      filtered = filtered.filter(student => student.attendance >= 75);
    } else if (filterType === 'Absent') {
      filtered = filtered.filter(student => student.attendance < 75);
    }

    // Filter by low attendance toggle
    if (showLowAttendance) {
      filtered = filtered.filter(student => student.attendance < 75);
    }

    // Bonus: Sort by attendance
    if (sortBy === 'attendance') {
      filtered = filtered.sort((a, b) => b.attendance - a.attendance);
    }

    return filtered;
  };

  const filteredStudents = getFilteredStudents();

  // Handle student selection (toggle selection for multiple students)
  const handleStudentClick = (studentId) => {
    setSelectedStudents(prevSelected => {
      if (prevSelected.includes(studentId)) {
        // Deselect if already selected
        return prevSelected.filter(id => id !== studentId);
      } else {
        // Add to selection
        return [...prevSelected, studentId];
      }
    });
  };

  // Toggle low attendance filter
  const toggleLowAttendance = () => {
    setShowLowAttendance(!showLowAttendance);
  };

  // Toggle sort by attendance
  const toggleSort = () => {
    setSortBy(sortBy === 'attendance' ? null : 'attendance');
  };

  // Clear all selections
  const clearSelection = () => {
    setSelectedStudents([]);
  };

  // Calculate statistics
  const totalStudents = students.length;
  const presentStudents = students.filter(s => s.attendance >= 75).length;
  const absentStudents = students.filter(s => s.attendance < 75).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Header />

        {/* Stats Panel */}
        <StatsPanel
          total={totalStudents}
          present={presentStudents}
          absent={absentStudents}
          filtered={filteredStudents.length}
          selected={selectedStudents.length}
        />

        {/* Filter Controls */}
        <FilterControls 
          filterType={filterType}
          setFilterType={setFilterType}
          showLowAttendance={showLowAttendance}
          toggleLowAttendance={toggleLowAttendance}
          sortBy={sortBy}
          toggleSort={toggleSort}
        />

        {/* Clear Selection Button */}
        <ClearSelectionButton 
          selectedCount={selectedStudents.length}
          onClear={clearSelection}
        />

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* No Students Found */}
        {!loading && filteredStudents.length === 0 && <EmptyState />}

        {/* Student List */}
        {!loading && filteredStudents.length > 0 && (
          <StudentList 
            students={filteredStudents}
            selectedStudents={selectedStudents}
            onStudentClick={handleStudentClick}
          />
        )}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
