# 按钮组件

<script setup>
  import demo from './demo.vue'
</script>

<Preview component-path="i-button">
  <demo />
</Preview>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`arg1` | 第一个参数 | string | - | `default` | 否 
`arg2` | 第二个参数 | string | - | `default` | 否

## 方法
方法名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event
`customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | $event | 原生的 dom event
`customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三

## highlight.js

> src/main.js

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import iui from 'packages'
import 'github-markdown-css'
import 'highlight.js/styles/github.css';
import Preview from '@/components/Preview.vue'

const app = createApp(App)
app.component('Preview', Preview)
app.use(router)
app.use(store)
app.use(iui)
app.mount('#app')
```

> src/components/Preview.vue

```html
<template>
  <div class="preview">
    <div ref="source" class="source"><slot /></div>
    <div ref="meta" class="meta" :style="{ height: show ? height : 0 }">
      <div ref="code" class="code">
        <pre><code class="language-html">{{ sourceCode }}</code></pre>
      </div>
    </div>
    <div ref="control" class="control" @click="show = !show">&lt; &gt;</div>
  </div>
</template>

<script setup>
import Highlight from "highlight.js";
import { nextTick, onMounted, ref } from "vue";
const props = defineProps({
  componentName: {
    type: String,
    required: true
  }
})
const code = ref("");
const show = ref(false);
const sourceCode = ref("");
const height = ref(0);
onMounted(() => {
  console.log('onMounted');
  import(`../../packages/${props.componentName}/docs/demo.vue?raw`).then(
    async (module) => {
      sourceCode.value = module.default;
      await nextTick()
      Highlight.initHighlighting();
      height.value = code.value.getClientRects()[0].height + "px";
    }
  );
})
</script>

<style scoped lang="less">
.preview {
  border: 1px solid var(--color-border-muted);
  border-radius: 3px;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 8px 0 var(--color-border-muted),
      0 2px 4px 0 var(--color-border-muted);
  }
  .source {
    padding: 26px;
  }
  .meta {
    border-top: 0.5px solid var(--color-border-muted);
    border-bottom: 0.5px solid var(--color-border-muted);
    transition: 0.5s;
    overflow: hidden;
    .code {
      padding: 10px;
    }
  }
  .control {
    padding: 10px;
    color: #d3dce6;
    text-align: right;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: #409eff;
      background: var(--color-border-muted);
    }
  }
}
</style>
```
