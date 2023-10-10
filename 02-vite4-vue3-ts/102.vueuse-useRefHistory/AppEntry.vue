<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { useRefHistory } from '@vueuse/core'

const val1 = ref<any>({ aa: 1 })
const val1His = useRefHistory(val1)
console.log('val1His: ', val1His)

function setVal1() {
  val1.value.aa = Math.random().toString(36).substring(2) + '中文'
}

const val2 = ref<any>({ bb: 2 })
const val2His = useRefHistory(val2, { deep: true })
console.log('val2His: ', val2His)

function setVal2() {
  val2.value.bb = Math.random().toString(36).substring(2) + '中文'
}
</script>
<template>
  <h3>默认是 x => JSON.parse(JSON.stringify(x)) 生成的克隆对象而非原始对象</h3>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>useRefHistory 修改嵌套对象默认不会产生历史</div>
    <div>
      <button @click="setVal1">setVal1</button>
    </div>
    <div>val1: {{ val1 }}</div>
    <pre>val1His: {{ val1His.history }}</pre>
  </div>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>useRefHistory 可以设置 deep, 所有修改都产生历史</div>
    <div>
      <button @click="setVal2">setVal2</button>
    </div>
    <div>val2: {{ val2 }}</div>
    <pre>val2His: {{ val2His.history }}</pre>
  </div>
</template>
<style scoped lang="less"></style>
