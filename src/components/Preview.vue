<template>
  <div class="preview">
    <div ref="source" class="source">
      <slot />
    </div>
    <div ref="meta" class="meta" :style="{ height: show ? height : 0 }">
      <div ref="code" class="code">
        <pre class="line-numbers"><code class="language-html">{{ sourceCode }}</code></pre>
      </div>
    </div>
    <div ref="control" class="control" @click="show = !show">&lt; &gt;</div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Prism from 'prismjs'
const props = defineProps({
  componentPath: {
    type: String,
    required: true
  }
})
const code = ref('')
const show = ref(false)
const sourceCode = ref('')
const height = ref(0)
onMounted(() => {
  import(`../../packages/${props.componentPath}/docs/demo.vue?raw`).then(
    async (module) => {
      sourceCode.value = module.default
      await nextTick()
      Prism.highlightAll()
      height.value = code.value.getClientRects()[0].height + 'px'
    }
  )
})
</script>

<style lang="less">
.preview {
  border: 1px solid var(--borderColor-muted);
  border-radius: 3px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 8px 0 var(--borderColor-muted), 0 2px 4px 0 var(--borderColor-muted);
  }

  .source {
    padding: 26px;
  }

  .meta {
    overflow: hidden;
    border-top: 0.5px solid var(--borderColor-muted);
    border-bottom: 0.5px solid var(--borderColor-muted);
    transition: 0.5s;

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
      background: var(--borderColor-muted);
    }
  }
}
</style>
