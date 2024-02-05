import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue({
    include: [/\.vue$/],
  })],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server:{
    host:'0.0.0.0',
    port:1919,
  }
})
