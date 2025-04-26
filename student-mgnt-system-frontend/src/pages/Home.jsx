// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Student Management System</h1>
      <div>
        <Link to="/students">View Students</Link>
      </div>
      <div>
        <Link to="/add">Add Students</Link>
      </div>
    </div>
  );
}
