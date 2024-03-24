<script setup lang="tsx">
import { onMounted, onUpdated } from 'vue'

console.log('CompC setup 1')
onMounted(() => {
  console.log('CompC onMounted')
})
console.log('CompC setup 2')
</script>
<template>
  <div class="CompC" style="border: 1px solid green; padding: 10px">
    <div>CompC</div>
  </div>
</template>
<style scoped></style>
