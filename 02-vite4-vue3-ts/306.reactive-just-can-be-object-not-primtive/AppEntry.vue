<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { watch } from 'vue'
import CompB from './CompB.vue'

const reactive1 = reactive('abc')
console.log('reactive1: ', reactive1);

function setReactive1() {
  reactive1.obj = Math.random()
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <button @click="setReactive1">setReactive1</button>
    <div>reactive1: {{ reactive1 }}</div>
  </div>
</template>
<style scoped lang="less"></style>
