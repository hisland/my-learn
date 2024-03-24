<script setup lang="tsx">
import { onMounted, onUpdated } from 'vue'
import CompB from './CompB.vue'

console.log('CompA setup 1')

onMounted(() => {
  console.log('CompA onMounted')
})

console.log('CompA setup 2')
</script>
<template>
  <div class="CompA" style="border: 1px solid purple; padding: 10px">
    <div>CompA</div>
    <CompB a1="a1"></CompB>
  </div>
</template>
<style scoped></style>
