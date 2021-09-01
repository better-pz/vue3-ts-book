import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvg } from './src/icons/index'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvg('./src/icons/svg/'),
    viteMockServe({
      mockPath: 'mock',  // 指定 mock 数据文件夹路径
    }),
  ]
})
