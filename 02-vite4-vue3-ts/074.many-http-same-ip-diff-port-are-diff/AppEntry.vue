<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useFetch } from '@vueuse/core'

for (let ii = 0; ii < 10; ii++) {
  const fetchObj = useFetch(
    'http://10.0.0.100:5193/v2/elv/mockData/timeoutReq?o=pc1&timeout=' + 3000
  )
}
for (let ii = 0; ii < 10; ii++) {
  const fetchObj = useFetch(
    'http://10.0.0.100:5194/v2/elv/mockData/timeoutReq?o=pc2&timeout=' + 3000
  )
}
for (let ii = 0; ii < 10; ii++) {
  const fetchObj = useFetch(
    'http://10.0.0.100:5195/v2/elv/mockData/timeoutReq?o=pc3&timeout=' + 3000
  )
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
