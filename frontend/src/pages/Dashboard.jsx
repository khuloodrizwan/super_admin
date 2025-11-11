// ========================================
// 📁 FILE: src/pages/Dashboard.jsx
// Description: Fetches and displays all users from backend using UserCard component
// ========================================

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';


import '../styles/dashboard.css';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch all users from backend
  const fetchUsers = async () => {
    try {
      // ✅ Fetching all users from backend
      const response = await axios.get('http://localhost:5000/api/v1/auth/users');
      
      // Handle different response structures
      setUsers(response.data.users || response.data);
      setError('');
    } catch (err) {
      setError(
        err.response?.data?.message || 'Failed to fetch users. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">User Dashboard</h1>
          <p className="dashboard-subtitle">
            Manage and view all registered users
          </p>
        </div>

        {loading && (
          <div className="loading">
            <p>Loading users...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && users.length === 0 && (
          <div className="empty-state">
            <p>No users found. Register to see users here!</p>
          </div>
        )}

        {!loading && !error && users.length > 0 && (
          <div className="users-grid">
            {users.map((user) => (
              <UserCard
                key={user._id || user.email}
                user={user}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;