
import { useState } from 'react';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Rahul', course: 'BCA' },
    { id: 2, name: 'Priya', course: 'BBA' },
    { id: 3, name: 'Amit', course: 'MCA' },
    { id: 4, name: 'Neha', course: 'BCA' }
  ]);

  function deleteStudent(id) {
    setStudents(
      students.filter((student) => student.id !== id)
    );
  }

  return (
    <div>
      <h1>Student Management</h1>

      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        students.map((student) => (
          <div key={student.id}>
            <p>Student Name: {student.name}</p>
            <p>Course: {student.course}</p>

            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default App;
