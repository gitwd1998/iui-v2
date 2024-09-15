<template>
  <i-button @click="handleClick">num++{{ num }}</i-button>
</template>

<script setup>
import { ref } from 'vue';

const num = ref(1);
const handleClick = () => {
  console.log(num.value++);
}
</script>