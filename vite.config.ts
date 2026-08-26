import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
const env = loadEnv(mode, '.', '');

  return {
    base: env.VITE_BASE_PATH || '/',
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 5173,
    },
    preview: {
      host: '0.0.0.0',
      port: 4173,
    },
  };
});
