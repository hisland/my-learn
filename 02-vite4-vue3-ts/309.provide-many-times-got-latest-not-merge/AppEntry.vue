<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { watch } from 'vue'
import { provide } from 'vue'
import CompB from './CompB.vue'

const ref1 = ref({ obj: '1' })
console.log('ref1: ', ref1)
const reactive1 = reactive({ kk: '2' })
console.log('reactive1: ', reactive1)

provide('some-key', {
  ref1,
  reactive1,
})

provide('other-key', {
  reactive1,
})
provide('other-key', {
  ref1,
})

function setRef1() {
  ref1.value.obj = 'app obj' + Math.random()
}
function setReactive1() {
  reactive1.kk = 'app kk' + Math.random()
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>provide 保持原样, 不会转换</div>
    <button @click="setRef1">setRef1</button>
    <button @click="setReactive1">setReactive1</button>
    <div>ref1: {{ ref1 }}</div>
    <div>reactive1: {{ reactive1 }}</div>

    <CompB></CompB>
  </div>
</template>
<style scoped lang="less"></style>
