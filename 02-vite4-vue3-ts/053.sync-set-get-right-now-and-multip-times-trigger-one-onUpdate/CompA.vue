<script setup lang="tsx">
import { defineAsyncComponent } from 'vue'
import { onMounted, onUpdated } from 'vue'
import { ref, computed } from 'vue'

const aa1 = ref('abc')

function setRandom() {
  const rnd1 = Math.random().toString(36).substring(2, 8)
  console.log('rnd1: ', rnd1)
  aa1.value = rnd1
  console.log('aa1.value: ', aa1.value)
  const rnd2 = Math.random().toString(36).substring(2, 8)
  console.log('rnd2: ', rnd2)
  aa1.value = rnd2
  console.log('aa1.value: ', aa1.value)
}

onUpdated(() => {
  console.log('onUpdated aa1.value: ', aa1.value)
})
</script>
<template>
  <div class="CompA" style="border: 1px solid purple; padding: 10px">
    <div>
      <button @click="setRandom">
        set同步get能取出来, 多次同步set, 最终只触发一次 onUpdated
      </button>
    </div>
    <div>aa1: {{ aa1 }}</div>
  </div>
</template>
<style scoped></style>
