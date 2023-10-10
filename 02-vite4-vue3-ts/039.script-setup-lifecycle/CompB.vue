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

console.log('CompB creating')
onMounted(() => {
  console.log('CompB onMounted')
})
onUpdated(() => {
  console.log('CompB onUpdated')
})
onUnmounted(() => {
  console.log('CompB onUnmounted')
})
onBeforeMount(() => {
  console.log('CompB onBeforeMount')
})
onBeforeUpdate(() => {
  console.log('CompB onBeforeUpdate')
})
onBeforeUnmount(() => {
  console.log('CompB onBeforeUnmount')
})
onErrorCaptured(() => {
  console.log('CompB onErrorCaptured')
})
onRenderTracked(() => {
  console.log('CompB onRenderTracked')
})
onRenderTriggered(() => {
  console.log('CompB onRenderTriggered')
})
onActivated(() => {
  console.log('CompB onActivated')
})
onDeactivated(() => {
  console.log('CompB onDeactivated')
})
onServerPrefetch(() => {
  console.log('CompB onServerPrefetch')
})

const isVisible = ref(false)
</script>
<template>
  <div class="wrap">
    <div style="border: 1px solid purple; padding: 10px; margin: 5px">
      <button @click="isVisible = !isVisible">toggle {{ isVisible }}</button>

      <div
        style="border: 1px solid green; padding: 10px; margin: 5px"
        v-if="isVisible"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
