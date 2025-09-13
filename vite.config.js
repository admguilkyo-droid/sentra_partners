import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

{
"scripts": {
"dev": "vite",
"build": "vite build",
"preview": "vite preview --host --port $PORT"
}
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
export default defineConfig({
plugins: [react()],
resolve: {
alias: {
'@': path.resolve(__dirname, './src'),
},
},
server: {
host: true,
port: process.env.PORT || 5173
},
preview: {
host: true,
port: process.env.PORT || 4173
}
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
