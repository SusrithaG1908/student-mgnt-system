// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Student Management System</h1>
      <Link to="/students">View Students</Link>
    </div>
  );
}
