<template>
  <div class="{{ compClassName }}" v-bind="$attrs">{{ compZhName }}</div>
</template>

<script>
export default {
  name: "{{ compName }}",
};
</script>

<style lang="less" scoped>
.{{ compClassName }} {}
</style>