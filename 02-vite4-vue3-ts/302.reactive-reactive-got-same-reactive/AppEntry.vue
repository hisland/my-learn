<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { watch } from 'vue'
import CompB from './CompB.vue'

const reactive1 = reactive({ obj: 1 })
const reactive2 = reactive(reactive1)
console.log('reactive1===reactive2: ', reactive1 === reactive2)

function setReactive1() {
  reactive1.obj = Math.random()
}
function setReactive2() {
  reactive2.obj = Math.random()
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <button @click="setReactive1">setReactive1</button>
    <button @click="setReactive2">setReactive2</button>
    <div>reactive1: {{ reactive1 }}</div>
    <div>reactive2: {{ reactive2 }}</div>
  </div>
</template>
<style scoped lang="less"></style>
