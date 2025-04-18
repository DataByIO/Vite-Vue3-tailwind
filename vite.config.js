import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173, // 프론트 포트
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 백엔드 서버 주소
        ws: false,
        PathRewrite: {
          '^/': ''
        }
      }
    }
  }
})