import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Optionally set up aliases for easier imports
      '@': '/src',
    },
  },
  
  build: {
    rollupOptions: {
      main: '/src/main.jsx',  // Make sure Vite uses index.js as the entry point
    },
  },
})


