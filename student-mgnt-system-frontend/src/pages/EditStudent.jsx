// src/pages/EditStudent.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';  // Import toast

const apiUrl = process.env.REACT_APP_BACKEND_API_URL;

export default function EditStudent() {
  const { id } = useParams();
  const [form, setForm] = useState({ studentId: '', firstName: '', lastName: '', email: '', dob: '', department: '', enrollmentYear: '', isActive: true });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${apiUrl}/students/${id}`)
      .then(res => setForm(res.data))
      .catch(() => toast.error('Failed to fetch student data.'));
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`${apiUrl}/students/${id}`, form)
      .then(() => {
        toast.success('Student updated successfully!');
        navigate('/students');
      })
      .catch(() => toast.error('Failed to update student.'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Student</h2>
      <input value={form.studentId} onChange={e => setForm({ ...form, studentId: e.target.value })} />
      <input value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
      <input value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
      <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="date" value={form.dob?.slice(0, 10)} onChange={e => setForm({ ...form, dob: e.target.value })} />
      <input value={form.department} onChange={e => setForm({ ...form, department: e.target.value })} />
      <input type="number" value={form.enrollmentYear} onChange={e => setForm({ ...form, enrollmentYear: e.target.value })} />
      <label>
        Active:
        <input type="checkbox" checked={form.isActive} onChange={e => setForm({ ...form, isActive: e.target.checked })} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}
