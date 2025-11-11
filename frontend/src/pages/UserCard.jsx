// ========================================
// 📁 FILE: src/components/UserCard.jsx
// Description: Displays logged-in user info in a styled card
// ========================================

import React, { useEffect, useState } from 'react';
import '../styles/usercard.css';

const UserCard = () => {
  const [user, setUser] = useState(null);

  // Load user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="usercard-container">
        <div className="usercard empty">
          <h2>No User Info Found ❌</h2>
          <p>Please log in again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="usercard-container">
      <div className="usercard">
        <h2 className="usercard-title">Welcome, {user.name || 'User'} 👋</h2>
        <div className="user-info">
          <p><strong>Name:</strong> {user.name || 'N/A'}</p>
          <p><strong>Email:</strong> {user.email || 'N/A'}</p>
          <p><strong>Role:</strong> {user.role || 'Standard User'}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
