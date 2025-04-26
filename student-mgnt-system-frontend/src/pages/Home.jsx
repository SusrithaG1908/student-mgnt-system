// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (    
    <div>
      <div style={styles.content}>
        <Link to="/students">View Students</Link><br></br>
        <br></br>
        <Link to="/add">Add New Student</Link>
      </div>
    </div>  
  );  
}

const styles = {
  content: {
    padding: '2rem',       // adds space around your content
    paddingTop: '1rem',     // little extra margin below navbar
  },
};
