import React from 'react';
import StudentCard from './StudentCard';

function StudentList({ students, selectedStudents, onStudentClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {students.map(student => (
        <StudentCard
          key={student.id}
          student={student}
          isSelected={selectedStudents.includes(student.id)}
          onClick={() => onStudentClick(student.id)}
        />
      ))}
    </div>
  );
}

export default StudentList;
