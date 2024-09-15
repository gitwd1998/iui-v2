# markdown解析器

## markdown-it

### 安装
```bash
npm i -D markdown-it
```

### 使用方式
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import MarkDownPlugin from 'vite-plugin-md'

export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    MarkDownPlugin()
  ]
})
```


# 代码高亮实现方式

## highlight.js

### 安装
```bash
npm i -D highlight.js
```

### 引入样式
```js
// main.js
// highlight.js/styles预设了多种样式
import 'highlight.js/styles/github-gist.css'
```

### 使用方式
```html
<script setup>
import Highlight from "highlight.js";
import { nextTick, onMounted, ref } from "vue";
const sourceCode = ref("");
onMounted(() => {
  import(`../../packages/${props.componentPath}/docs/demo.vue?raw`).then(
    async (module) => {
      sourceCode.value = module.default;
      await nextTick()
      Highlight.initHighlighting();
    }
  );
})
</script>
```


## prismjs

### 安装
```bash
npm i -D prismjs
npm i -D vite-plugin-prismjs
```

### 引入样式
```js
// main.js
// prismjs/themes下有预设了多种样式
import 'prismjs/themes/prism-tomorrow.css'
```
### 使用方式
参考[Preview](src/components/Preview.vue)

### 配置
```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import MarkDownPlugin from 'vite-plugin-md'
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    MarkDownPlugin(),
    PrismjsPlugin({
      languages: 'all',
      plugins: ['line-numbers', 'show-language', 'copy-to-clipboard', 'inline-color', 'previewers'],
      theme: 'default',
      css: true,
    })
  ]
})
```


# 参考文章

[基于 Vite 搭建开发体验超级丝滑的 Vue3 组件库开发框架](https://juejin.cn/post/7040655239849967652)