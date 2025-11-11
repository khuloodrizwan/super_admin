// ========================================
// 📁 FILE: src/App.jsx
// Description: Main app component with routing configuration between all pages
// ========================================

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserCard from './pages/UserCard';
import Home from './pages/Home';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usercard" element={<UserCard />} />
      </Routes>
    </Router>
  );
};

export default App;