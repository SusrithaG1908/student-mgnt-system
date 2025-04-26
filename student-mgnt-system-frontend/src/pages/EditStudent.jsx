import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const apiUrl = process.env.REACT_APP_BACKEND_API_URL;

export default function EditStudent() {
  const { id } = useParams();
  const [form, setForm] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${apiUrl}/students/${id}`)
      .then(res => setForm(res.data))
      .catch(() => toast.error('Failed to fetch student data.'));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${apiUrl}/students/${id}`, form)
      .then(() => {
        toast.success('Student updated successfully!');
        navigate('/students');
      })
      .catch(() => toast.error('Failed to update student.'));
  };

  return (
    <div style={styles.container}>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>studentId</label>
          <input type="text" name="studentId" value={form.studentId} onChange={handleChange} required />
        </div>
        <div style={styles.inputGroup}>
          <label>firstName</label>
          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
        </div>
        <div style={styles.inputGroup}>
          <label>lastName</label>
          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
        </div>
        <div style={styles.inputGroup}>
          <label>email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div style={styles.inputGroup}>
          <label>dob</label>
          <input type="date" name="dob" value={form.dob?.slice(0, 10)} onChange={handleChange} required />
        </div>
        <div style={styles.inputGroup}>
          <label>department</label>
          <input type="text" name="department" value={form.department} onChange={handleChange} required />
        </div>
        <div style={styles.inputGroup}>
          <label>enrollmentYear</label>
          <input type="number" name="enrollmentYear" value={form.enrollmentYear} onChange={handleChange} required />
        </div>

        <button type="submit" style={styles.updateButton}>Update</button>
      </form>
      <div style={{ marginTop: '10px' }}>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  updateButton: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};
