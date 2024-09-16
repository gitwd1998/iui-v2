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
import txt from '@/assets/text.txt?raw'
import txtUrl from '@/assets/text.txt?url'
import md from '@/assets/md.md?raw'
import mdUrl from '@/assets/md.md?url'
import img from '@/assets/logo.png?raw'
import imgUrl from '@/assets/logo.png?url'
import json, { xiamingrui } from '@/assets/json.json'
import jsonUrl from '@/assets/json.json?url'
import jsonStr from '@/assets/json.json?raw'
</script>
