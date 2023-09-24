<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { watch } from 'vue'
import CompB from './CompB.vue'

const reactive1 = reactive({ obj: 1 })
const ref2 = ref(reactive1)
console.log('reactive1===ref2: ', reactive1 === ref2)
console.log('reactive1, ref2: ', reactive1, ref2)

function setReactive1() {
  reactive1.obj = Math.random()
}
function setRef2() {
  ref2.value.obj = Math.random()
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <button @click="setReactive1">setReactive1</button>
    <button @click="setRef2">setRef2</button>
    <div>reactive1: {{ reactive1 }}</div>
    <div>ref2: {{ ref2 }}</div>
  </div>
</template>
<style scoped lang="less"></style>
