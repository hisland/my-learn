<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 2000 } = options

  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  })
  clearTimeout(id)
  return response
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

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

asyncLoop()

async function asyncLoop() {
  try {
    const rs = await fetchWithTimeout(
      'http://10.0.0.100:5193/v2/elv/mockData/timeoutReq?o=pc1&timeout=' +
        RandomInt(0, 3) * 1000
    )
    console.log('rs: ', rs)
  } catch (error) {
    console.log(error)
  }
  await delay(1000)
  await asyncLoop()
}
</script>
<template>
  <div class="AppEntry">
    <div>同一个域并发连接6个, 不同域可叠加, 不同端口也算不同域</div>
  </div>
</template>
<style scoped>
.AppEntry {
}
</style>
