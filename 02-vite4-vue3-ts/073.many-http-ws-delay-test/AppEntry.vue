<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useFetch } from '@vueuse/core'
import { useWebSocket } from '@vueuse/core'

for (let ii = 0; ii < 10; ii++) {
  const fetchObj = useWebSocket('ws://10.0.0.100:5193/v2/elv/ws/mockData')
}
for (let ii = 0; ii < 10; ii++) {
  const fetchObj = useFetch(
    `http://10.0.0.100:5193/v2/elv/mockData/timeoutReq?o=${ii}&timeout=` + 3000
  )
}
</script>
<template>
  <div class="AppEntry">
    <div>同一个域并发连接6个, 不同域可叠加</div>
    <div>ws 不影响 http 的6个并发</div>
  </div>
</template>
<style scoped>
.AppEntry {
}
</style>
