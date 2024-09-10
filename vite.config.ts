import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {    
    globals: true,    
    environment: 'jsdom',  
    setupFiles: './src/setupTest.ts', // Specify the path to the setup file
    coverage: {
      provider: 'c8', // You can also use 'istanbul'
      reporter: ['text', 'json', 'html'], // Generates various formats
      all: true, // Include all files (not just tested files)
      lines: 80, // Set thresholds for coverage
      functions: 80,
      branches: 80,
      statements: 80,
    },
  },
})
