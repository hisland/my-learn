<script setup lang="tsx">
defineOptions({
  inheritAttrs: false,
})

import { useAttrs, useSlots } from 'vue'
const attrs = useAttrs()
console.log('attrs: ', attrs)
const slots = useSlots()
console.log('slots: ', slots)

import CompC from './CompC.vue'
</script>
<template>
  <div>
    <div>compb</div>
    <CompC>
      <template v-slot="slotProps"><slot v-bind="slotProps"></slot></template>
      <template v-slot:slotb="slotProps">
        <slot name="slotb" v-bind="slotProps"></slot>
      </template>
      <template v-slot:slotc="slotProps"
        ><slot name="slotc" v-bind="slotProps"></slot
      ></template>
    </CompC>
  </div>
</template>
