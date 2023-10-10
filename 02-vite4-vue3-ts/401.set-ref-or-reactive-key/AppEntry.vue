<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import CompB from './CompB.vue'
import { useAlertsStore } from './store.ts'

const alertsStore = useAlertsStore()
console.log('alertsStore: ', alertsStore)

function setRef1() {
  alertsStore.ref1 = 'app' + Math.random()
}
function setReactive1() {
  alertsStore.reactive1.aa = 'app' + Math.random()
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>
      store 本身是个 reactive对象, 所以和 reactive 嵌套 ref 一样, store.ref
      即可, 不需要 store.ref.value
    </div>
    <button @click="setRef1">setRef1</button>
    <button @click="setReactive1">setReactive1</button>
    <div>alertsStore: {{ alertsStore }}</div>
  </div>
</template>
<style scoped lang="less"></style>
