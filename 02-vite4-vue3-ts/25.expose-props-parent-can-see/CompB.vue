<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    url: string
  }>(),
  {
  }
)

defineExpose({
  props
})

console.log(props)
onMounted(() => {})
</script>
<template>
  <div class="wrap"></div>
</template>
<style scoped lang="less"></style>
