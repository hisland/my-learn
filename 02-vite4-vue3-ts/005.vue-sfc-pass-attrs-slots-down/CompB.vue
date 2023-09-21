<script setup lang="ts">
import CompC from './CompC.vue'
defineOptions({
  inheritAttrs: false,
})
</script>
<template>
  <CompC v-bind="$attrs">
    <template v-for="(_, key0) in $slots" :key="key0" v-slot:[key0]="slotProps">
      <slot :name="key0" v-bind="slotProps"></slot>
    </template>
  </CompC>
</template>
