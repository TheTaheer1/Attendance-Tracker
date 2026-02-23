import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainLayout from './components/MainLayout';
import Header from './components/Header';
import StatsPanel from './components/StatsPanel';
import FilterControls from './components/FilterControls';
import ClearSelectionButton from './components/ClearSelectionButton';
import LoadingSpinner from './components/LoadingSpinner';
import EmptyState from './components/EmptyState';
import StudentList from './components/StudentList';
import Footer from './components/Footer';
import { countTotal, countPresent, countAbsent } from './helpers/countStudents';
import { filterByType, filterLowAttendance, sortByAttendance } from './helpers/filterStudents';

function App() {
  // storing all student data
  const [students, setStudents] = useState([]);
  
  // this will store which filter button is clicked (All, Present or Absent)
  const [filterType, setFilterType] = useState('All');
  
  // storing selected student ids in array
  const [selectedStudents, setSelectedStudents] = useState([]);
  
  // true/false for showing only low attendance students
  const [showLowAttendance, setShowLowAttendance] = useState(false);
  
  // to show loading spinner when data is being fetched
  const [loading, setLoading] = useState(true);
  
  // for sorting students by attendance percentage
  const [sortBy, setSortBy] = useState(null);

  // this code runs when page first loads
  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      
      try {
        // first check if we already have data saved in browser
        const savedStudents = localStorage.getItem('studentAttendance');

        if (savedStudents) {
          // if data exists, use it
          const data = JSON.parse(savedStudents);
          setStudents(data);
          setLoading(false);
        } else {
          // if no data, fetch from API
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          
          // create student array with attendance percentage
          const studentsData = [];
          
          for (let i = 0; i < response.data.length; i++) {
            const user = response.data[i];
            
            // generate random attendance between 40 and 100
            const randomAttendance = Math.floor(Math.random() * 61) + 40;
            
            // create student object
            const studentObj = {
              id: user.id,
              name: user.name,
              email: user.email,
              city: user.address.city,
              attendance: randomAttendance
            };
            
            studentsData.push(studentObj);
          }

          // save data to browser so we don't lose it on refresh
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

  // function to filter students based on conditions
  const getFilteredStudents = () => {
    // step 1: copy all students
    let result = [];
    for (let i = 0; i < students.length; i++) {
      result.push(students[i]);
    }

    // step 2: filter by All/Present/Absent
    result = filterByType(result, filterType);

    // step 3: filter by low attendance if toggle is on
    result = filterLowAttendance(result, showLowAttendance);

    // step 4: sort if sort button is clicked
    result = sortByAttendance(result, sortBy === 'attendance');

    return result;
  };

  const filteredStudents = getFilteredStudents();

  // when user clicks on a student card
  const handleStudentClick = (studentId) => {
    let newSelected = [];
    let alreadySelected = false;
    
    // check if student is already selected
    for (let i = 0; i < selectedStudents.length; i++) {
      if (selectedStudents[i] === studentId) {
        alreadySelected = true;
      }
    }
    
    if (alreadySelected) {
      // remove from selection
      for (let i = 0; i < selectedStudents.length; i++) {
        if (selectedStudents[i] !== studentId) {
          newSelected.push(selectedStudents[i]);
        }
      }
    } else {
      // add to selection
      for (let i = 0; i < selectedStudents.length; i++) {
        newSelected.push(selectedStudents[i]);
      }
      newSelected.push(studentId);
    }
    
    setSelectedStudents(newSelected);
  };

  // toggle low attendance filter on/off
  const toggleLowAttendance = () => {
    if (showLowAttendance === true) {
      setShowLowAttendance(false);
    } else {
      setShowLowAttendance(true);
    }
  };

  // toggle sort on/off
  const toggleSort = () => {
    if (sortBy === 'attendance') {
      setSortBy(null);
    } else {
      setSortBy('attendance');
    }
  };

  // clear all selected students
  const clearSelection = () => {
    setSelectedStudents([]);
  };

  // counting total students
  const totalStudents = countTotal(students);
  
  // counting present students (attendance >= 75%)
  const presentStudents = countPresent(students);
  
  // counting absent students (attendance < 75%)
  const absentStudents = countAbsent(students);

  return (
    <MainLayout>
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
      </MainLayout>
    );
  }

export default App;
