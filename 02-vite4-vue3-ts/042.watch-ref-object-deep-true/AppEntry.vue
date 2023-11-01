<script setup lang="ts">
import { reactive, ref, computed, watch } from 'vue'

import { provide, inject } from 'vue'
const obj = ref({
  aa: 1,
  nest: {},
})

watch(
  obj,
  (newVal) => {
    console.log('newVal: ', newVal)
  }
  // { deep: true }
)

function setTopKey() {
  obj.value.aa = Math.random().toString(36).substring(2)
}
function setNestKey() {
  obj.value.nest.aa = Math.random().toString(36).substring(2)
}
function setRndKey() {
  const key = Math.random().toString(36).substring(2, 4)
  obj.value.nest[key] = {
    key: Math.random().toString(36).substring(2),
  }
}
</script>
<template>
  <div class="AppEntry">
    <h1>
      watch ref 对象 嵌套属性的变化需要 deep:true 才生效, 模板渲染默认是 true 的感觉
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
