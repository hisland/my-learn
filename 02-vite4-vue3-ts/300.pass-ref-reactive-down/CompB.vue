<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import type { Ref } from 'vue'

const props = withDefaults(
  defineProps<{
    ref1: any
    reactive1: Record<any, any>
  }>(),
  {}
)
onMounted(() => {
  console.log(props)
})
</script>
<template>
  <div class="wrap"></div>
</template>
<style scoped lang="less"></style>
