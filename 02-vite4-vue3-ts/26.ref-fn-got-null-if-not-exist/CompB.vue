<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    num: number
  }>(),
  {}
)

onMounted(() => {})
</script>
<template>
  <div class="wrap">test {{ props.num }}</div>
</template>
<style scoped lang="less"></style>
