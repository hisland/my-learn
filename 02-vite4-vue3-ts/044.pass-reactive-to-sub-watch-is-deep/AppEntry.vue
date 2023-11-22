<script setup lang="ts">
import { reactive, ref, computed, watch } from 'vue'
import { provide, inject } from 'vue'
import CompB from './CompB.vue'

const obj = reactive({
  nest: {},
})

watch(obj, (newVal) => {
  console.log('0 obj newVal: ', newVal)
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
    <h1>obj 是 reactive 传递给 CompB</h1>
    <button @click="setTopKey">setTopKey</button>
    <button @click="setNestKey">setNestKey</button>
    <button @click="setRndKey">setRndKey</button>

    <CompB :obj="obj"></CompB>
  </div>
</template>
<style scoped>
.AppEntry {
}
</style>
