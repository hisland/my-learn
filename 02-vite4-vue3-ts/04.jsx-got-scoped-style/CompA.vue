<script setup lang="tsx">
import CompB from './CompB.vue'
</script>
<template>
  <div class="compa">
    <div class="foo">compa</div>
    <CompB a1="a1">
      <template v-slot="slotProps">
        <div>value from a {{ slotProps.val0 }}</div>
      </template>
      <template v-slot:slotb="slotProps">
        <div>value from a slotb {{ slotProps.val1 }}</div>
      </template>
      <template v-slot:slotc="slotProps">
        <div>value from a slotc {{ slotProps.val2 }}</div>
      </template>
    </CompB>
  </div>
</template>
<style scoped>
.foo {
  color: purple;
}
</style>
