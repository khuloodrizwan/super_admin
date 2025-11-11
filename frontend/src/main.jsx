// ========================================
// 📁 FILE: src/main.jsx
// Description: React entry point - bootstraps the application
// ========================================

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)