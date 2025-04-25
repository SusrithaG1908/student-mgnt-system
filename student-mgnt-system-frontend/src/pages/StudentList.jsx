// src/pages/StudentList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';  // Import toast

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(res => setStudents(res.data))
      .catch(err => toast.error('Failed to fetch students.'));
  }, []);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`)
      .then(() => {
        setStudents(students.filter(s => s._id !== id));
        toast.success('Student deleted successfully');
      })
      .catch(() => toast.error('Failed to delete student'));
  };

  return (
    <div>
      <h2>All Students</h2>
      <Link to="/add">Add New Student</Link>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Department</th>
            <th>Year</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s._id}>
              <td>{s.studentId}</td>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.email}</td>
              <td>{new Date(s.dob).toLocaleDateString()}</td>
              <td>{s.department}</td>
              <td>{s.enrollmentYear}</td>
              <td>{s.isActive ? 'Yes' : 'No'}</td>
              <td>
                <Link to={`/edit/${s._id}`}>Edit</Link>
                <button onClick={() => deleteStudent(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
