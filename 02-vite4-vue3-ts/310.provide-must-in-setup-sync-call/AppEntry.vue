<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { watch } from 'vue'
import { provide } from 'vue'
import CompB from './CompB.vue'

const ref1 = ref({ obj: '1' })
console.log('ref1: ', ref1)
const reactive1 = reactive({ kk: '2' })
console.log('reactive1: ', reactive1)

function setProvide() {
  provide('some-key', {
    ref1,
    reactive1,
  })
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>不能动态调用 provide, 必须在 setup 同步调用</div>
    <button @click="setProvide">setProvide</button>
    <div>ref1: {{ ref1 }}</div>
    <div>reactive1: {{ reactive1 }}</div>

    <CompB></CompB>
  </div>
</template>
<style scoped lang="less"></style>
