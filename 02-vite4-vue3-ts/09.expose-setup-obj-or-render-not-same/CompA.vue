<script setup lang="tsx">
import { ref } from 'vue'
import CompB from './CompB.vue'
import CompC from './CompC.tsx'
import CompD from './CompD.js'
import CompE from './CompE.vue'
const refb = ref(null)
const refc = ref(null)
const refd = ref(null)
const refe = ref(null)
</script>
<template>
  <div class="compa">
    <div class="foo">compa</div>
    <CompB a1="a1" ref="refb"></CompB>
    <CompC a1="a1" ref="refc"></CompC>
    <CompD a1="a1" ref="refd"></CompD>
    <CompE a1="a1" ref="refe"></CompE>
  </div>
</template>
<style scoped>
.foo {
  color: purple;
}
</style>
