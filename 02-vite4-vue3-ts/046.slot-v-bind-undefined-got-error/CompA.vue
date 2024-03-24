<script setup lang="tsx">
import CompB from './CompB.vue'
</script>
<template>
  <div style="border: 1px solid pink; margin: 10px">
    <div>compa</div>
    <CompB>
      <template v-slot="slotProps">value from a {{ slotProps }}</template>
    </CompB>
  </div>
</template>
