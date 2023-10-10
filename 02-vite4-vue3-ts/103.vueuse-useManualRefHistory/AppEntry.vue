<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { useManualRefHistory } from '@vueuse/core'

const val1 = ref<any>({ aa: 1 })
const val1His = useManualRefHistory(val1)
console.log('val1His: ', val1His)

function setVal1() {
  val1.value.aa = Math.random().toString(36).substring(2) + '中文'
}
function commitVal1() {
  val1His.commit()
}

const val2 = ref<any>({ bb: 2 })
const val2His = useManualRefHistory(val2, { clone: true })
console.log('val2His: ', val2His)

function setVal2() {
  val2.value.bb = Math.random().toString(36).substring(2) + '中文'
}
function commitVal2() {
  val2His.commit()
}
</script>
<template>
  <h3>对象必须指定 clone:true 不然不会克隆对象</h3>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>useManualRefHistory 没有 clone:true 不是想要的</div>
    <div>
      <button @click="setVal1">setVal1</button>
      <button @click="commitVal1">commitVal1</button>
    </div>
    <div>val1: {{ val1 }}</div>
    <pre>val1His: {{ val1His.history }}</pre>
  </div>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>useManualRefHistory clone: true</div>
    <div>
      <button @click="setVal2">setVal2</button>
      <button @click="commitVal2">commitVal2</button>
    </div>
    <div>val2: {{ val2 }}</div>
    <pre>val2His: {{ val2His.history }}</pre>
  </div>
</template>
<style scoped lang="less"></style>
