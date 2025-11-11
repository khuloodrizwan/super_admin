// ========================================
// 📁 FILE: src/pages/Home.jsx
// Description: Landing page with welcome message and call-to-action buttons
// ========================================

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">
          Welcome to Auth Dashboard
        </h1>
        <p className="home-subtitle">
          A modern, secure authentication system for your applications
        </p>
        <div className="home-buttons">
          <Link to="/register" className="btn btn-primary">
            Get Started
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;