<script setup lang="tsx">
import { useAttrs, useSlots } from 'vue'
// const props = withDefaults(
//   defineProps<{
//     aa: string
//     bb: number
//     // url: string
//     // method: string
//     // filterData?: Function
//   }>(),
//   {
//     // method: 'get',
//   }
// )
// console.log('props: ', props)

const attrs = useAttrs()
console.log('CompC attrs: ', attrs)
const slots = useSlots()
console.log('CompC slots: ', slots)
</script>
<template>
  <div>
    <div>compc</div>
    <slot val0="cc-cc0"></slot>
    <div>slotb</div>
    <slot name="slotb" val1="cc-cc1"></slot>
    <div>slotc</div>
    <slot name="slotc" val2="cc-val2"></slot>
  </div>
</template>
