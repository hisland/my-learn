<script setup lang="ts">
import { onMounted, ref, readonly, computed } from 'vue'

console.log('------1 ')
const aa1 = computed(() => {
  console.log('------computed 1.1 ')
  return { aa: 1 }
})
const aa2 = readonly(aa1)
// console.log('aa1: ', aa1.value)
console.log('aa2: ', aa2.value) // 这里会触发 computed 的调用

// console.log('------2 ')
// aa1.value.aa = 2
// console.log('aa1: ', aa1.value)
// console.log('aa2: ', aa2.value)

// console.log('------2 ')
// aa2.value.aa = 3
// console.log('aa1: ', aa1.value)
// console.log('aa2: ', aa2.value)

onMounted(() => {})
</script>
<template>
  <div>
    <h3>computed在读取的时候才调用, readonly 包裹也一样</h3>
    <div ref="elRef" class="elRef"></div>
  </div>
</template>
<style scoped lang="scss">
.elRef {
}
</style>
