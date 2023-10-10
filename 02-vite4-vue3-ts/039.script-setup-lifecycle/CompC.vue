<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import {
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch,
} from 'vue'

console.log('CompC creating')
onMounted(() => {
  console.log('CompC onMounted')
})
onUpdated(() => {
  console.log('CompC onUpdated')
})
onUnmounted(() => {
  console.log('CompC onUnmounted')
})
onBeforeMount(() => {
  console.log('CompC onBeforeMount')
})
onBeforeUpdate(() => {
  console.log('CompC onBeforeUpdate')
})
onBeforeUnmount(() => {
  console.log('CompC onBeforeUnmount')
})
onErrorCaptured(() => {
  console.log('CompC onErrorCaptured')
})
onRenderTracked(() => {
  console.log('CompC onRenderTracked')
})
onRenderTriggered(() => {
  console.log('CompC onRenderTriggered')
})
onActivated(() => {
  console.log('CompC onActivated')
})
onDeactivated(() => {
  console.log('CompC onDeactivated')
})
onServerPrefetch(() => {
  console.log('CompC onServerPrefetch')
})
</script>
<template>
  <div class="wrap">CompC</div>
</template>
<style scoped lang="less"></style>
