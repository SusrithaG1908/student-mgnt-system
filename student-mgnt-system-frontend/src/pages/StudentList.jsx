// src/pages/StudentList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast

const apiUrl = process.env.REACT_APP_BACKEND_API_URL;

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/students`)
      .then(res => setStudents(res.data))
      .catch(err => toast.error('Failed to fetch students.'));
  }, []);

  const deleteStudent = (id) => {
    axios.delete(`${apiUrl}/students/${id}`)
      .then(() => {
        setStudents(students.filter(s => s._id !== id));
        toast.success('Student deleted successfully');
      })
      .catch(() => toast.error('Failed to delete student'));
  };

  return (
    <div style={styles.content}>
      <div>
        <Link to="/add">Add New Student</Link> | <Link to="/">Back to Home</Link>
      </div>
      <div>
        <h3>Students List</h3>
      </div>      
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.cell}>ID</th>
            <th style={styles.cell}>First Name</th>
            <th style={styles.cell}>Last Name</th>
            <th style={styles.cell}>Email</th>
            <th style={styles.cell}>DOB</th>
            <th style={styles.cell}>Department</th>
            <th style={styles.cell}>Year</th>
            <th style={styles.cell}>Active</th>
            <th style={styles.cell}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s._id}>
              <td style={styles.cell}>{s.studentId}</td>
              <td style={styles.cell}>{s.firstName}</td>
              <td style={styles.cell}>{s.lastName}</td>
              <td style={styles.cell}>{s.email}</td>
              <td style={styles.cell}>{new Date(s.dob).toLocaleDateString()}</td>
              <td style={styles.cell}>{s.department}</td>
              <td style={styles.cell}>{s.enrollmentYear}</td>
              <td style={styles.cell}>{s.isActive ? 'Yes' : 'No'}</td>
              <td style={styles.cell}>
                <Link to={`/edit/${s._id}`}>
                  <button style={styles.editButton}>Edit</button>
                </Link>
                <button onClick={() => deleteStudent(s._id)} style={styles.deleteButton}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  content: {
    padding: '2rem',
    paddingTop: '1rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '2px solid #000', // Added border to the table itself
  },
  cell: {
    textAlign: 'center',   // <-- center align all cells
    padding: '8px',
    border: '2px solid #000', // Increased border thickness for cells
  },
  editButton: {
    marginRight: '10px',
    padding: '5px 10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

