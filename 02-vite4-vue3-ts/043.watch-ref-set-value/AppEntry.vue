<script setup lang="ts">
import { reactive, ref, computed, watch } from 'vue'

import { provide, inject } from 'vue'
const obj = ref({
  aa: 1,
  nest: {},
})

watch(obj, (newVal) => {
  console.log('newVal: ', newVal)
})

function setTopKey() {
  obj.value.aa = Math.random().toString(36).substring(2)
}
function setNestKey() {
  obj.value.nest.aa = Math.random().toString(36).substring(2)
}
function replaceValue() {
  const key = Math.random().toString(36).substring(2, 4)
  obj.value = key
}
</script>
<template>
  <div class="AppEntry">
    <h1>watch ref 默认只有 .value 变化时才触发</h1>
    <button @click="setTopKey">setTopKey 不触发</button>
    <button @click="setNestKey">setNestKey 不触发</button>
    <button @click="replaceValue">replaceValue 触发</button>
    <pre>{{ obj }}</pre>
  </div>
</template>
<style scoped>
.AppEntry {
}
</style>
