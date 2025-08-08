  import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // expose on LAN (equivalent to --host / 0.0.0.0)
  },
  preview: {
    host: true, // expose preview on LAN as well
  },
})
