// Helper functions for filtering students

// Filter students by type (All, Present, Absent)
export function filterByType(students, filterType) {
  if (filterType === 'All') {
    return students;
  }
  
  let result = [];
  
  if (filterType === 'Present') {
    for (let i = 0; i < students.length; i++) {
      if (students[i].attendance >= 75) {
        result.push(students[i]);
      }
    }
  } else if (filterType === 'Absent') {
    for (let i = 0; i < students.length; i++) {
      if (students[i].attendance < 75) {
        result.push(students[i]);
      }
    }
  }
  
  return result;
}

// Filter only low attendance students
export function filterLowAttendance(students, showLow) {
  if (!showLow) {
    return students;
  }
  
  let result = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].attendance < 75) {
      result.push(students[i]);
    }
  }
  
  return result;
}

// Sort students by attendance (high to low)
export function sortByAttendance(students, shouldSort) {
  if (!shouldSort) {
    return students;
  }
  
  let result = [];
  
  // copy all students
  for (let i = 0; i < students.length; i++) {
    result.push(students[i]);
  }
  
  // bubble sort
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j].attendance < result[j + 1].attendance) {
        // swap
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  
  return result;
}
