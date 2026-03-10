import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/job-tracker-for-dummies/',
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': '"production"',
  },
})
