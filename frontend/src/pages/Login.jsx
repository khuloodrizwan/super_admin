// ========================================
// 📁 FILE: src/pages/Login.jsx
// Description: Handles login with conditional redirection and user data storage
// ========================================

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // 🔹 Send login request to backend
      const response = await axios.post(
        'http://localhost:5000/api/v1/auth/login',
        formData
      );

      const user = response.data.user;
      const token = response.data.token;

      // 🔹 Save token in localStorage
      if (token) localStorage.setItem('authToken', token);

      // 🔹 Save user info in localStorage
      if (user) {
        localStorage.setItem(
          'userData',
          JSON.stringify({
            name: user.name,
            email: user.email,
            role: user.role
          })
        );
      } else {
        // fallback if backend doesn’t send user object
        localStorage.setItem(
          'userData',
          JSON.stringify({
            name: 'Guest User',
            email: formData.email,
            role: 'Standard User'
          })
        );
      }

      // 🔹 Conditional Redirect
      if (formData.email === 'khulood@gmail.com') {
        setMessage({
          type: 'success',
          text: 'Welcome Khulood! Redirecting to your Dashboard...'
        });
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        setMessage({
          type: 'success',
          text: 'Login successful! Redirecting to your profile...'
        });
        setTimeout(() => navigate('/usercard'), 1500);
      }

    } catch (error) {
      setMessage({
        type: 'error',
        text:
          error.response?.data?.message ||
          'Login failed. Please check your credentials.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Login to access your account</p>

        {message.text && (
          <div className={`message message-${message.type}`}>
            {message.text}
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="login-footer">
          Don’t have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
