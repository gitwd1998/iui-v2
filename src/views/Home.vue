<template>
  <div>
    <ol>
      <li>txt: {{ txt }}</li>
      <li>txtUrl: {{ txtUrl }}</li>
      <li>md: {{ md }}</li>
      <li>mdUrl: {{ mdUrl }}</li>
      <li>img: {{ img }}</li>
      <li>imgUrl: {{ imgUrl }}</li>
      <li>json: {{ json }}</li>
      <li>jsonUrl: {{ jsonUrl }}</li>
      <li>jsonStr: {{ jsonStr }}</li>
      <li>xiamingrui: {{ xiamingrui }}</li>
    </ol>
  </div>
</template>

<script setup>
import txt from "/src/assets/text.txt?raw";
import txtUrl from "/src/assets/text.txt?url";
import md from "/src/assets/md.md?raw";
import mdUrl from "/src/assets/md.md?url";
import img from "/src/assets/logo.png?raw";
import imgUrl from "/src/assets/logo.png?url";
import json from "/src/assets/json.json";
import jsonUrl from "/src/assets/json.json?url";
import jsonStr from "/src/assets/json.json?raw";
import { xiamingrui } from "/src/assets/json.json";
</script>

<style lang="less" scoped>
</style>