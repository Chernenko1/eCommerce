import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@constants': '/src/constants',
      '@pages': '/src/pages',
      '@store': '/src/store',
      '@utils': '/src/utils',
      '@hooks': '/src/hooks',
    },
  },
  plugins: [react()],
})
