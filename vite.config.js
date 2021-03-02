import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

console.log(import.meta.env)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  // Resolve Options
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  // Server Options
  server: {
    host: '0.0.0.0',
    port: 30010,
    strictPort: true,
    https: false,
    open: false,
    cors: true,
    hmr: true
  },
  // Build Options
  build: {
    // 'modules' or 'esnext' or array->(valid: esN, chromeN, edgeN, firefoxN, iosN, nodeN, safariN)
    target: 'esnext'
  }
})
