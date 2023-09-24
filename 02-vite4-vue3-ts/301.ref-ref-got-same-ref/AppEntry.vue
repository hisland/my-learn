<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { watch } from 'vue'
import CompB from './CompB.vue'

const ref1 = ref(33)
const ref2 = ref(ref1)
console.log('ref1===ref2: ', ref1 === ref2)

function setRef1() {
  ref1.value = Math.random()
}
function setRef2() {
  ref2.value = Math.random()
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <button @click="setRef1">setRef1</button>
    <button @click="setRef2">setRef2</button>
    <div>ref1: {{ ref1 }}</div>
    <div>ref2: {{ ref2 }}</div>
  </div>
</template>
<style scoped lang="less"></style>
