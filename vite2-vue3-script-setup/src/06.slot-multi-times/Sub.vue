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
      <slot some="1"></slot>
      <slot foo="2"></slot>
      <slot></slot>

      <slot name="hey" some="2"></slot>
      <slot name="hey" foo="1"></slot>
    </div>
  </div>
</template>
<style scoped lang="scss">
.box {
  border: 1px solid red;
  padding: 10px;
}
</style>
