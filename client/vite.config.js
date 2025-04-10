import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  server: {
    // proxy: {
    //   // Proxy requests starting with '/api' to your backend server
    //   '/api': {
    //     target: 'http://localhost:5001', // Your backend server address
    //     changeOrigin: true,
    //     // Optional: You might not need '/api' in the final backend route
    //     // rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
})
