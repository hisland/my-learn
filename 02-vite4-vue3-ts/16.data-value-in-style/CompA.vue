<script setup lang="tsx">
import CompB from './CompB.vue'
</script>
<template>
  <div class="compa">
    <div class="foo">compa</div>
    <CompB a1="a1"></CompB>
  </div>
</template>
<style scoped>
.foo {
  color: purple;
}
</style>
