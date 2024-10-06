import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/REST-Countries-API/',  // Set this to your GitHub repository name
  plugins: [react()],
})
