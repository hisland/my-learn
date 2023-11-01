<script setup lang="ts">
import { reactive, ref, computed, watch } from 'vue'

import { provide, inject } from 'vue'
const obj = reactive({
  nest: {},
})

watch(obj, (newVal) => {
  console.log('newVal: ', newVal)
})

function setTopKey() {
  obj.aa = Math.random().toString(36).substring(2)
}
function setNestKey() {
  obj.nest.aa = Math.random().toString(36).substring(2)
}
function setRndKey() {
  const key = Math.random().toString(36).substring(2, 4)
  obj.nest[key] = {
    key: Math.random().toString(36).substring(2),
  }
}
</script>
<template>
  <div class="AppEntry">
    <h1>
      watch reactive 自动深层监听任意的属性变更, 动态添加的属性也会自动监听
    </h1>
    <button @click="setTopKey">setTopKey</button>
    <button @click="setNestKey">setNestKey</button>
    <button @click="setRndKey">setRndKey</button>
    <pre>{{ obj }}</pre>
  </div>
</template>
<style scoped>
.AppEntry {
}
</style>
