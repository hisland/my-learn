<script setup lang="tsx">
import { defineAsyncComponent } from 'vue'
import { onMounted, onUpdated } from 'vue'
import { ref, computed } from 'vue'

const aa1 = ref(2)
const aa2 = ref(3)
const sum = computed(() => {
  console.log('sum: ')
  return aa1.value + aa2.value
})

function setRandom() {
  aa1.value = Math.random()
  aa2.value = Math.random()
}
</script>
<template>
  <div class="CompA" style="border: 1px solid purple; padding: 10px">
    <div>
      <button @click="setRandom">同时设置2个值, computed 只计算一次</button>
    </div>
    <div>aa1: {{ aa1 }}</div>
    <div>aa2: {{ aa2 }}</div>
    <div>sum: {{ sum }}</div>
  </div>
</template>
<style scoped></style>
