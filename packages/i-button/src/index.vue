<template>
  <button class="i-button" v-bind="$attrs">
    <slot>按 钮</slot>
  </button>
</template>

<script>
export default {
  name: "IButton"
}
</script>

<style lang="less" scoped>
.i-button {
  padding: 8px 16px;
  box-sizing: border-box;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  cursor: pointer;
}
</style>