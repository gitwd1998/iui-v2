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
import Prism from "prismjs";
import { nextTick, onMounted, ref } from "vue";
const props = defineProps({
  componentPath: {
    type: String,
    required: true
  }
})
const code = ref("");
const show = ref(false);
const sourceCode = ref("");
const height = ref(0);
onMounted(() => {
  import(`../../packages/${props.componentPath}/docs/demo.vue?raw`).then(
    async (module) => {
      sourceCode.value = module.default;
      await nextTick()
      Prism.highlightAll()
      height.value = code.value.getClientRects()[0].height + "px";
    }
  );
})
</script>

<style lang="less" scoped>
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
