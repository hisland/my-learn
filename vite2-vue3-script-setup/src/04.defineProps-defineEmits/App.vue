<script setup>
import { ref } from "vue";
import Sub from "./Sub.vue";
const foo = ref('hallo foo')
function show(val1, val2) {
  console.log(val1, val2)
  foo.value = Math.random().toString(36)
}
</script>

<template>
  <div>
    <Sub :foo="foo" @halo="show"></Sub>
  </div>
</template>
