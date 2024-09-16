import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import MarkDownPlugin from 'vite-plugin-md'
import { resolve } from 'path'
import PrismjsPlugin from 'vite-plugin-prismjs'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      packages: resolve(__dirname, './packages')
    }
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    MarkDownPlugin(),
    PrismjsPlugin({
      // ['json', 'css'] 按需引入，'all' 所有语言
      languages: 'all',
      // 插件：行号、语言、复制、颜色预览
      plugins: ['line-numbers', 'show-language', 'copy-to-clipboard', 'inline-color', 'previewers'],
      // 主题
      theme: 'default',
      // 样式
      css: true
    })
  ]
})
