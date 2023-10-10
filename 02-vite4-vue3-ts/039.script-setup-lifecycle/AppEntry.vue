<script setup lang="tsx">
import { ref, reactive, computed } from 'vue'
import CompB from './CompB.vue'
import CompC from './CompC.vue'

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

console.log('AppEntry creating')
onMounted(() => {
  console.log('AppEntry onMounted')
})
onUpdated(() => {
  console.log('AppEntry onUpdated')
})
onUnmounted(() => {
  console.log('AppEntry onUnmounted')
})
onBeforeMount(() => {
  console.log('AppEntry onBeforeMount')
})
onBeforeUpdate(() => {
  console.log('AppEntry onBeforeUpdate')
})
onBeforeUnmount(() => {
  console.log('AppEntry onBeforeUnmount')
})
onErrorCaptured(() => {
  console.log('AppEntry onErrorCaptured')
})
onRenderTracked(() => {
  console.log('AppEntry onRenderTracked')
})
onRenderTriggered(() => {
  console.log('AppEntry onRenderTriggered')
})
onActivated(() => {
  console.log('AppEntry onActivated')
})
onDeactivated(() => {
  console.log('AppEntry onDeactivated')
})
onServerPrefetch(() => {
  console.log('AppEntry onServerPrefetch')
})

const isVisible = ref(true)

const obj = reactive({
  aa: 1,
  bb: 2,
})
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px; margin-bottom: 5px">
    <div style="border: 1px solid purple; padding: 10px; margin-bottom: 5px">
      <button @click="isVisible = !isVisible">toggle {{ isVisible }}</button>
    </div>
    <div style="height: 300px; border: 1px solid pink">
      <CompB>
        <CompC></CompC>
      </CompB>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
