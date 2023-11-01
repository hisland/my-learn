<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import type { Ref } from 'vue'

const props = withDefaults(
  defineProps<{
    ref1: any
  }>(),
  {}
)

function showProps() {
  console.log('CompC showProps: ', props)
}

onMounted(() => {
  console.log('CompC onMounted 1: ')
})
</script>
<template>
  <div class="wrap" style="border: 1px solid green; padding: 10px">
    CompC
    <div style="color: red"></div>
    <button @click="showProps">showProps</button>
    <div>{{ ref1 }}</div>
  </div>
</template>
<style scoped lang="less"></style>
