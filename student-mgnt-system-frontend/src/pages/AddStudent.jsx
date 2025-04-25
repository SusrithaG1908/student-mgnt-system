// src/pages/AddStudent.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';  // Import toast

export default function AddStudent() {
  const [form, setForm] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: '',
    isActive: true
  });
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_BACKEND_API_URL;

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`${apiUrl}/students`, form)
      .then(() => {
        toast.success('Student added successfully!');
        navigate('/students');
      })
      .catch(() => toast.error('Failed to add student.'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <input placeholder="Student ID" onChange={e => setForm({ ...form, studentId: e.target.value })} />
      <input placeholder="First Name" onChange={e => setForm({ ...form, firstName: e.target.value })} />
      <input placeholder="Last Name" onChange={e => setForm({ ...form, lastName: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="date" onChange={e => setForm({ ...form, dob: e.target.value })} />
      <input placeholder="Department" onChange={e => setForm({ ...form, department: e.target.value })} />
      <input type="number" placeholder="Enrollment Year" onChange={e => setForm({ ...form, enrollmentYear: e.target.value })} />
      <label>
        Active:
        <input type="checkbox" checked={form.isActive} onChange={e => setForm({ ...form, isActive: e.target.checked })} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
