import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  assetsInclude: '**/*.ogv',
  plugins: [vue()],
  server: {
    port: 8080
  },
  build: {
    outDir: 'docs'
  }
})
