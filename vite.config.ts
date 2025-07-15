import { defineConfig } from 'vite'; // Make sure this import exists
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/', // your repo name
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
