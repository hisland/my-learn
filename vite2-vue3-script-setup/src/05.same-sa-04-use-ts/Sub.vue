<script setup lang="ts">
const props = defineProps<{
  foo: string
}>()
const emits = defineEmits<{
  (e: 'halo', val1: string, val2: string): void
}>()
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
