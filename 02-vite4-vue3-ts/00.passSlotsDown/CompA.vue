<script setup lang="tsx">
import CompB from './CompB.vue'
</script>
<template>
  <div>
    <div>compa</div>
    <CompB>
      <template v-slot="slotProps">value from a {{ slotProps.val0 }}</template>
      <template v-slot:slotb="slotProps"
        >value from a slotb {{ slotProps.val1 }}</template
      >
      <template v-slot:slotc="slotProps"
        >value from a slotc {{ slotProps.val2 }}</template
      >
    </CompB>
  </div>
</template>
