<script setup>
const props = defineProps({
  foo: String,
})
const emits = defineEmits(['halo'])
let halo = 1
</script>
<template>
  <div>
    <div>prop.foo: {{ props.foo }}</div>
    <div>foo: {{ foo }}</div>
    <div>
      <button @click="$emit('halo', 'god', 'god2')">emit</button>
    </div>
  </div>
</template>
<style scoped lang="scss">
</style>
