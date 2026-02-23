// Helper functions for counting students

// Count total students
export function countTotal(students) {
  return students.length;
}

// Count present students (attendance >= 75%)
export function countPresent(students) {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].attendance >= 75) {
      count = count + 1;
    }
  }
  return count;
}

// Count absent students (attendance < 75%)
export function countAbsent(students) {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].attendance < 75) {
      count = count + 1;
    }
  }
  return count;
}
