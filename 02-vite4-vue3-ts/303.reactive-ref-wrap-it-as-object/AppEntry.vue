<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { watch } from 'vue'
import CompB from './CompB.vue'

const ref1 = ref({ obj: 1 })
const reactive2 = reactive(ref1)
console.log('ref1===reactive2: ', ref1 === reactive2)
console.log('ref1, reactive2: ', ref1, reactive2)

function setRef1() {
  ref1.value.obj = Math.random()
}
function setReactive2() {
  reactive2.value.obj = Math.random()
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <button @click="setRef1">setRef1</button>
    <button @click="setReactive2">setReactive2</button>
    <div>ref1: {{ ref1 }}</div>
    <div>reactive2: {{ reactive2 }}</div>
  </div>
</template>
<style scoped lang="less"></style>
