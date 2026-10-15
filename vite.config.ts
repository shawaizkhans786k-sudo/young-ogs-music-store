import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev
export default defineConfig({
  base: './', // <--- Isay badal kar dot slash (./) kar dein
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
