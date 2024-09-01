import { defineConfig } from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/alx-react-app/node_modules/vite'
import react from 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/alx-react-app/node_modules/@vitejs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://github.com/ChumisaUkhoHaya/alx-fe-reactjs/blob/main/alx-react-app/src/api.js', // Replace with your API endpoint
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});   
