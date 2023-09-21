<script setup lang="tsx">
defineOptions({
  inheritAttrs: false,
})

import { useAttrs, useSlots } from 'vue'
const attrs = useAttrs()
console.log('CompB attrs: ', attrs)
const slots = useSlots()
console.log('CompB slots: ', slots)

import CompC from './CompC.vue'
</script>
<template>
  <div>
    <div>compb</div>
    <CompC v-bind="$attrs"></CompC>
  </div>
</template>
