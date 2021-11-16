<script setup>
const props = defineProps({
  foo: String,
})
let halo = 1
</script>
<template>
  <div>
    <div>$attrs: {{ $attrs }}</div>
    <div>foo: {{ foo }}</div>
  </div>
</template>
<style scoped lang="scss">
.box {
  border: 1px solid red;
  padding: 10px;
}
</style>
