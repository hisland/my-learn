<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { createPinia } from 'pinia'

const pinia1 = createPinia()
const pinia2 = createPinia()

import { useAlertsStore } from './store.ts'

const alertsStore1 = useAlertsStore(pinia1)
console.log('alertsStore1: ', alertsStore1)

function setRef1() {
  alertsStore1.ref1 = 'app' + Math.random()
}
function setReactive1() {
  alertsStore1.reactive1.aa = 'app' + Math.random()
}

const alertsStore2 = useAlertsStore(pinia2)
console.log('alertsStore2: ', alertsStore2)

function setRef2() {
  alertsStore2.ref1 = 'app' + Math.random()
}
function setReactive2() {
  alertsStore2.reactive1.aa = 'app' + Math.random()
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <button @click="setRef1">setRef1</button>
    <button @click="setReactive1">setReactive1</button>

    <div>
      <button @click="alertsStore1.set_ref1()">set_ref1</button>

      ref1: {{ alertsStore1.ref1 }}
    </div>
    <div>
      <button @click="alertsStore1.set_reactive1()">set_reactive1</button>

      reactive1: {{ alertsStore1.reactive1 }}
    </div>
  </div>
  <div style="border: 1px solid #eee; padding: 10px">
    <button @click="setRef2">setRef2</button>
    <button @click="setReactive2">setReactive2</button>

    <div>
      <button @click="alertsStore2.set_ref1()">alertsStore2.set_ref1</button>

      ref1: {{ alertsStore2.ref1 }}
    </div>
    <div>
      <button @click="alertsStore2.set_reactive1()">
        alertsStore2.set_reactive1
      </button>

      reactive1: {{ alertsStore2.reactive1 }}
    </div>
  </div>
</template>
<style scoped lang="less"></style>
