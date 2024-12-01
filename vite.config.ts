import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/hubspot': {
        target: 'https://api.hubapi.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hubspot/, ''),
      },
    },
  },
});