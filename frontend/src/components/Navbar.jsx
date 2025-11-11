// ========================================
// 📁 FILE: src/components/Navbar.jsx
// Description: Navigation bar with links to Home, Register, Login, and Dashboard pages
// ========================================

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          🔐 Auth Dashboard
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to="/register" className="navbar-link">Register</Link>
          </li>
          <li>
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;