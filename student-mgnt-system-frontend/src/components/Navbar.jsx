import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.title}>Student Management System</div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '1rem 2rem',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: 0,
  },
};

export default Navbar;
