<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { watch } from 'vue'
import CompB from './CompB.vue'

const ref1 = ref('some')
console.log('ref1: ', ref1)
const reactive1 = reactive({ obj: ref1 })
console.log('reactive1: ', reactive1)

function setRef1() {
  ref1.value = 'ref1 ' + Math.random()
}
function setReactive1() {
  reactive1.obj = 'reactive1 ' + Math.random()
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>
      ref 作为 reactive 的属性, reactive1.obj 即可读写, 不需要
      reactive1.obj.value
    </div>
    <button @click="setRef1">setRef1</button>
    <button @click="setReactive1">setReactive1</button>
    <div>ref1: {{ ref1 }}</div>
    <div>reactive1: {{ reactive1 }}</div>
  </div>
</template>
<style scoped lang="less"></style>
