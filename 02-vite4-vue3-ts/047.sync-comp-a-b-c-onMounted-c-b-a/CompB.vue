<script setup lang="tsx">
import { onMounted, onUpdated } from 'vue'
import CompC from './CompC.vue'

console.log('CompB setup 1')

onMounted(() => {
  console.log('CompB onMounted')
})

console.log('CompB setup 2')
</script>
<template>
  <div class="CompB" style="border: 1px solid pink; padding: 10px">
    <div>CompB</div>
    <CompC a1="a1"></CompC>
  </div>
</template>
<style scoped></style>
