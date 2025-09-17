import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react-router-dom',
      // Add any other packages that might be causing issues here
      // For example: '@remix-run/router' if you encounter that too.
    ],
  },
});