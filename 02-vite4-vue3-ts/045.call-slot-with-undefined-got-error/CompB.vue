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

import CompC from './CompC.vue'
</script>
<template>
  <div style="border: 1px solid red; margin: 10px">
    <div>compb</div>
    <CompC>
      <template
        v-for="(_, key0) in $slots"
        :key="key0"
        v-slot:[key0]="slotProps"
      >
        {{ showProps(slotProps) }}
        <!-- 这里 slotProps 可能为 undefined, 直接传下去会有问题 -->
        <!-- <slot :name="key0" v-bind="slotProps"></slot> -->
        <slot :name="key0" v-bind="slotProps ?? {}"></slot>
      </template>
    </CompC>
  </div>
</template>
