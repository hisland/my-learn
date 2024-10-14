<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
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
    <button @click="setRef1">setRef1</button>
    <button @click="setReactive1">setReactive1</button>

    <div>
      <button @click="alertsStore.set_ref1()">set_ref1</button>

      ref1: {{ alertsStore.ref1 }}
    </div>
    <div>
      <button @click="alertsStore.set_reactive1()">set_reactive1</button>

      reactive1: {{ alertsStore.reactive1 }}
    </div>
  </div>
</template>
<style scoped lang="less"></style>
