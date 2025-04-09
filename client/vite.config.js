import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
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
