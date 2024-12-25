<script setup lang="ts">
import { onMounted, ref, readonly } from 'vue'

console.log('------1 ')
const aa1 = ref({ aa: 1 })
const aa2 = readonly(aa1)
console.log('aa1: ', aa1.value)
console.log('aa2: ', aa2.value)

console.log('------2 ')
aa1.value.aa = 2
console.log('aa1: ', aa1.value)
console.log('aa2: ', aa2.value)

console.log('------2 ')
aa2.value.aa = 3
console.log('aa1: ', aa1.value)
console.log('aa2: ', aa2.value)

onMounted(() => {})
</script>
<template>
  <div>
    <h3>readonly 默认是递归的, 不可赋值</h3>
    <div ref="elRef" class="elRef"></div>
  </div>
</template>
<style scoped lang="scss">
.elRef {
}
</style>
