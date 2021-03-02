import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  // Server Options
  // server: {},
  // Build Options
  build: {
    // 'modules' or 'esnext' or array->(valid: esN, chromeN, edgeN, firefoxN, iosN, nodeN, safariN)
    target: ['es2020', 'chrome88']
  }
})
