// ========================================
// 📁 FILE: vite.config.js
// Description: Vite configuration file for React app
// ========================================

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})