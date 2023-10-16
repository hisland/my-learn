<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    url: string
  }>(),
  {}
)

defineExpose({
  aa: 1,
})

defineExpose({
  bb: 2,
})

console.log(props)
onMounted(() => {})
</script>
<template>
  <div class="wrap"></div>
</template>
<style scoped lang="less"></style>
