import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Allows imports like "src/components/Button" to resolve to "./src/components/Button"
      src: path.resolve(__dirname, 'packages/frontend/src'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // Optional: define the root if the frontend lives in a subdirectory
  // root: path.resolve(__dirname, 'packages/frontend'),
});
