<script setup lang="tsx">
import CompB from './CompB.vue'
</script>
<template>
  <div style="border: 1px solid pink; margin: 10px">
    <div>compa</div>
    <CompB>
      <template v-slot="slotProps">value from a {{ slotProps }}</template>
      <template v-slot:slotb="slotProps"
        >value from a slotb {{ slotProps }}</template
      >
      <template v-slot:slotc="slotProps"
        >value from a slotc {{ slotProps }}</template
      >
    </CompB>
  </div>
</template>
