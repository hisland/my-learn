<script setup lang="tsx">
import CompB from './CompB.vue'
</script>
<template>
  <div>
    <div>compa</div>
    <CompB
      a1="a1"
      @aa="
        () => {
          console.log(33)
        }
      "
    >
      <template v-slot="slotProps">a1 1 {{ slotProps }}</template>
      <template #slotb="slotProps">a1 2 {{ slotProps }}</template>
      <template #slotc="slotProps">a1 3 {{ slotProps }}</template>
    </CompB>
  </div>
</template>
