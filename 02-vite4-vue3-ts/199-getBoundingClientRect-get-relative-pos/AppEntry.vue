<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { useRefHistory, useManualRefHistory } from '@vueuse/core'
import { useEventListener } from '@vueuse/core'

const pos = ref({})
const el = ref<HTMLDivElement>()
const rect1 = ref({})
const pos1 = ref({})
useEventListener(el, 'click', function click(evt: MouseEvent) {
  console.log('bubble evt.pos client: ', evt.clientX, evt.clientY)
  console.log('bubble evt.pos offset: ', evt.offsetX, evt.offsetY)
  console.log('bubble evt.target: ', evt.target)
  console.log('bubble evt.currentTarget: ', evt.currentTarget)
  console.log('bubble evt.eventPhase: ', evt.eventPhase)

  pos.value.clientX = evt.clientX
  pos.value.clientY = evt.clientY
  pos.value.offsetX = evt.offsetX
  pos.value.offsetY = evt.offsetY
  pos.value.pageX = evt.pageX
  pos.value.pageY = evt.pageY

  pos1.value.relativeX = evt.clientX - rect1.value.left
  pos1.value.relativeY = evt.clientY - rect1.value.top
})

onMounted(() => {
  rect1.value = el.value?.getBoundingClientRect()
})

// useEventListener(
//   el,
//   'click',
//   function click(evt: MouseEvent) {
//     console.log('capture evt.pos client: ', evt.clientX, evt.clientY)
//     console.log('capture evt.pos offset: ', evt.offsetX, evt.offsetY)
//     console.log('capture evt.target: ', evt.target)
//     console.log('capture evt.currentTarget: ', evt.currentTarget)
//     console.log('capture evt.eventPhase: ', evt.eventPhase)
//   },
//   { capture: true }
// )
</script>
<template>
  <div style="background: lightgreen; padding: 20px" ref="el">
    <div style="background: pink; padding: 20px">
      <div style="background: cyan; padding: 20px"></div>
    </div>
  </div>

  <pre>
点击坐标: {{ pos }}
  </pre>
  <pre>
a的rect1: {{ rect1 }}
  </pre>
  <pre>
相对a左上角pos1: {{ pos1 }}
  </pre>
  <div style="height: 100vh; width: 150vw"></div>
</template>
<style scoped lang="less"></style>
