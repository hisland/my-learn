<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import gsap from 'gsap'

function RandomInt(min, max) {
  if (max === undefined) {
    max = min
    min = 0
  }
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers')
  }
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const val = ref(12345)
function setRef1(rndFrom = 5, rndTo = 100) {
  const rnd = RandomInt(rndFrom, rndTo)
  // console.log('rnd: ', rnd)
  // val.value = val.value + rnd
  const toVal = val.value + rnd

  gsap.to(val, { duration: 1, value: toVal })
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>
      <button @click="setRef1()">change 5, 100</button>
      <button @click="setRef1(1, 3)">change 1, 3</button>
    </div>
    <div>{{ Math.round(val) }}</div>
  </div>
</template>
<style scoped lang="less"></style>
