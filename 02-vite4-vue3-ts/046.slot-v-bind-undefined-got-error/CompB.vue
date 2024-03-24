<script setup lang="tsx">
defineOptions({
  inheritAttrs: false,
})

import { useAttrs, useSlots } from 'vue'
const attrs = useAttrs()
console.log('attrs: ', attrs)
const slots = useSlots()
console.log('slots: ', slots)

function showProps(arg: any) {
  console.log('showProps: ', arg)
}
</script>
<template>
  <div style="border: 1px solid red; margin: 10px">
    <div>compb &lt;slot v-bind="undefined">&lt;/slot> 会导致错误</div>
    <!-- <slot></slot> -->
    <slot v-bind="undefined"></slot>
    <!-- <slot v-bind="{ aa: 1 }"></slot> -->
  </div>
</template>
