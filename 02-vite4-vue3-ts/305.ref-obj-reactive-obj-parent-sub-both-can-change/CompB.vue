<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import type { Ref } from 'vue'

const props = withDefaults(
  defineProps<{
    ref1: any
    reactive1: Record<any, any>
  }>(),
  {}
)
onMounted(() => {
  console.log(props)
})

function setRef1() {
  props.ref1.obj = 'sub obj' + Math.random()
}
function setReactive1() {
  props.reactive1.kk = 'sub kk' + Math.random()
}
</script>
<template>
  <div class="wrap" style="border: 1px solid purple; padding: 10px">
    <button @click="setRef1">setRef1</button>
    <button @click="setReactive1">setReactive1</button>

    <div>props.ref1: {{ props.ref1 }}</div>
    <div>props.reactive1: {{ props.reactive1 }}</div>
  </div>
</template>
<style scoped lang="less"></style>
