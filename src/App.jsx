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
  const [students, setStudents] = useState([]);
  const [filterType, setFilterType] = useState('All');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [showLowAttendance, setShowLowAttendance] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      
      try {
        const savedStudents = localStorage.getItem('studentAttendance');

        if (savedStudents) {
          const data = JSON.parse(savedStudents);
          setStudents(data);
          setLoading(false);
        } else {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          
          const studentsData = [];
          
          for (let i = 0; i < response.data.length; i++) {
            const user = response.data[i];
            const randomAttendance = Math.floor(Math.random() * 61) + 40;
            
            const studentObj = {
              id: user.id,
              name: user.name,
              email: user.email,
              city: user.address.city,
              attendance: randomAttendance
            };
            
            studentsData.push(studentObj);
          }

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

  const getFilteredStudents = () => {
    let result = [];
    for (let i = 0; i < students.length; i++) {
      result.push(students[i]);
    }

    result = filterByType(result, filterType);
    result = filterLowAttendance(result, showLowAttendance);
    result = sortByAttendance(result, sortBy === 'attendance');

    return result;
  };

  const filteredStudents = getFilteredStudents();

  const handleStudentClick = (studentId) => {
    let newSelected = [];
    let alreadySelected = false;
    
    for (let i = 0; i < selectedStudents.length; i++) {
      if (selectedStudents[i] === studentId) {
        alreadySelected = true;
      }
    }
    
    if (alreadySelected) {
      for (let i = 0; i < selectedStudents.length; i++) {
        if (selectedStudents[i] !== studentId) {
          newSelected.push(selectedStudents[i]);
        }
      }
    } else {
      for (let i = 0; i < selectedStudents.length; i++) {
        newSelected.push(selectedStudents[i]);
      }
      newSelected.push(studentId);
    }
    
    setSelectedStudents(newSelected);
  };

  const toggleLowAttendance = () => {
    if (showLowAttendance === true) {
      setShowLowAttendance(false);
    } else {
      setShowLowAttendance(true);
    }
  };

  const toggleSort = () => {
    if (sortBy === 'attendance') {
      setSortBy(null);
    } else {
      setSortBy('attendance');
    }
  };

  const clearSelection = () => {
    setSelectedStudents([]);
  };

  const totalStudents = countTotal(students);
  const presentStudents = countPresent(students);
  const absentStudents = countAbsent(students);

  return (
    <MainLayout>
      <Header />

      <StatsPanel
          total={totalStudents}
          present={presentStudents}
          absent={absentStudents}
          filtered={filteredStudents.length}
          selected={selectedStudents.length}
        />

      <FilterControls 
          filterType={filterType}
          setFilterType={setFilterType}
          showLowAttendance={showLowAttendance}
          toggleLowAttendance={toggleLowAttendance}
          sortBy={sortBy}
          toggleSort={toggleSort}
        />

      <ClearSelectionButton 
          selectedCount={selectedStudents.length}
          onClear={clearSelection}
        />

      {loading && <LoadingSpinner />}

      {!loading && filteredStudents.length === 0 && <EmptyState />}

      {!loading && filteredStudents.length > 0 && (
          <StudentList 
            students={filteredStudents}
            selectedStudents={selectedStudents}
            onStudentClick={handleStudentClick}
          />
      )}

      <Footer />
    </MainLayout>
  );
}

export default App;
