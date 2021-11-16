<script setup>
let halo = 1
function show($slots) {
  console.log($slots)
}
</script>
<template>
  <div>
    <button @click="show($slots)">show</button>
    <div class="box">
      <component :is="$slots.default" some="1"></component>
      <component :is="$slots.default" foo="2"></component>
      <component :is="$slots.default"></component>
      <component :is="$slots.hey" some="1"></component>
      <component :is="$slots.hey"></component>
    </div>
  </div>
</template>
<style scoped lang="scss">
.box {
  border: 1px solid red;
  padding: 10px;
}
</style>
