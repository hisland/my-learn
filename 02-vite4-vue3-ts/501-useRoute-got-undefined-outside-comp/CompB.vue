<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log('route: ', route)

setTimeout(() => {
  const route2 = useRoute()
  console.log('route2: ', route2)
}, 300)

// const props = withDefaults(
//   defineProps<{
//   }>(),
//   {}
// )

// onMounted(() => {
//   console.log(props)
// })
</script>
<template>
  <div class="wrap">CompB</div>
</template>
<style scoped lang="less"></style>
