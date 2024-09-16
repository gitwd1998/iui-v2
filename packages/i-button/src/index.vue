<template>
  <button class="i-button" v-bind="$attrs">
    <slot>按 钮</slot>
  </button>
</template>

<script>
export default {
  name: 'IButton'
}
</script>

<style lang="less" scoped>
.i-button {
  box-sizing: border-box;
  height: 40px;
  padding: 8px 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}
</style>
