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

# eslint
- eslint：ESLint 是一个插件化的工具，它的目标是确保代码的一致性和遵守一定的代码规范。它可以检查 JavaScript 代码中的错误和潜在问题，并帮助你遵循最佳实践。
- babel-eslint：是一个允许 ESLint 理解 Babel 支持的所有 ECMAScript 语法的插件。由于 ESLint 的默认解析器 Espree 只支持最终确定的 ECMAScript 标准，并不包括 Babel 支持的实验性或非标准语法（如 Class 或 TypeScript 类型），因此 babel-eslint 作为一个自定义解析器，使得 ESLint 能够处理由 Babel 转换的源代码。babel-eslint 已经停止维护，并且被迁移到了新的包 @babel/eslint-parser。要使用 @babel/eslint-parser，需要在项目中安装 @babel/core 和 @babel/eslint-parser，并且在 ESLint 配置文件中指定 @babel/eslint-parser 作为解析器。
- eslint-config-standard：提供了一套基于 JavaScript 标准样式指南的 ESLint 规则。
- eslint-config-prettier：用来关闭所有与 Prettier 冲突的 ESLint 规则的，确保 ESLint 和 Prettier 可以无缝配合工作。Prettier 是一个流行的代码格式化工具，它有自己一套代码风格规则。
- eslint-plugin-import：为 ESLint 提供了关于模块导入语句的规则。它可以帮助你管理和检查模块的导入/导出语法，防止无效的模块路径、重复导入等问题。
- eslint-plugin-prettier：将 Prettier 的代码风格规则集成到 ESLint 中。它可以让你在 ESLint 运行时检查 Prettier 的代码风格，确保代码的一致性。
- eslint-plugin-vue：为 Vue 文件提供了 ESLint 规则。它可以检查 .vue 文件中的模板、脚本和样式，确保遵循 Vue 的最佳实践和风格指南。

# stylelint
- stylelint-config-recommended：提供了一组推荐的 CSS 样式指南的 Stylelint 规则。
- stylelint-config-standard：提供了一组标准的 CSS 样式指南的 Stylelint 规则。它通常被认为是一个起点，你可以在此基础上添加或覆盖规则以满足你的项目需求。这个配置包并不特定于任何 CSS 方法论或框架。包含`stylelint-config-recommended`扩展。
- stylelint-config-recess-order：为 CSS 属性的排序。它基于 Recess CSS 框架 的规则，帮助你按照特定的顺序排列 CSS 属性，以提高代码的可读性和一致性。这个配置包通常与`stylelint-config-standard`结合使用，因为它不包含除了属性排序之外的其他规则。包含`stylelint-order`插件。
- stylelint-config-recommended-less：提供了一组推荐的 LESS 规则。包含`stylelint-config-recommended`扩展，`stylelint-less`插件，和`postcss-less`语法解析器。
- stylelint-config-standard-less：提供了一组标准的 LESS 规则。包含`stylelint-config-standard` `stylelint-config-recommended-less`扩展。
- stylelint-config-recommended-scss：提供了一组推荐的 SCSS 规则。包含`stylelint-config-recommended`扩展，`stylelint-scss`插件，和`postcss-scss`语法解析器。
- stylelint-config-standard-scss：提供了一组标准的 SCSS 规则。包含`stylelint-config-standard` `stylelint-config-recommended-scss`扩展。
- stylelint-config-recommended-vue：提供了一组推荐的 VUE 单文件组件样式规则。包含`stylelint-config-recommended` `stylelint-config-html`扩展
- stylelint-config-standard-vue：提供了一组标准的 VUE 单文件组件样式规则。包含`stylelint-config-standard` `stylelint-config-recommended-vue`扩展。`stylelint-config-standard-vue/scss`提供了一组标准的 SCSS 规则。

# commitlint

## Conventional Commits
| Type     | 作用                                                                                   |
| -------- | -------------------------------------------------------------------------------------- |
| feat     | 新增特性 (feature)                                                                     |
| fix      | 修复 Bug(bug fix)                                                                      |
| docs     | 修改文档 (documentation)                                                               |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc)                        |
| refactor | 代码重构(refactor)                                                                     |
| perf     | 改善性能(A code change that improves performance)                                      |
| test     | 测试(when adding missing tests)                                                        |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                                               |
| revert   | 代码回退                                                                               |

## CSS 的书写顺序
1. 优先级1 定位属性
2. 优先级2 自身属性
3. 优先级3 文字样式
4. 优先级4 文本属性
5. 优先级5 css3中新增属性

## 绕过校验
```
git commit --no-verify -m "xxxxxx"
```


# 参考文章

[基于 Vite 搭建开发体验超级丝滑的 Vue3 组件库开发框架](https://juejin.cn/post/7040655239849967652)
