// ========================================
// 📁 FILE: src/components/UserCard.jsx
// Description: Card UI component for displaying individual user details (name, email, role)
// ========================================

import React from 'react';
import '../styles/usercardd.css';

const UserCard = ({ user }) => {
  // Helper function to get user initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="user-card">
      <div className="user-avatar">
        {getInitials(user.name)}
      </div>
      <h3 className="user-name">{user.name}</h3>
      <p className="user-email">{user.email}</p>
      <span className="user-role">{user.role}</span>
    </div>
  );
};

export default UserCard;