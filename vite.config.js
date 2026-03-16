import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path' // Adicione isso

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      // Isso aponta para o lugar exato dentro de node_modules
      'cookie': resolve(__dirname, 'node_modules/cookie/index.js'),
    },
  },
})
