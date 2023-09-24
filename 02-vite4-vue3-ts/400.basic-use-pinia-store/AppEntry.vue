<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import CompB from './CompB.vue'
import { useAlertsStore } from './store.ts'

const alertsStore = useAlertsStore()
console.log('alertsStore: ', alertsStore);

function setReactive1() {
  alertsStore.aa = 'app' + Math.random()
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <button @click="setReactive1">setReactive1</button>
    <div>alertsStore: {{ alertsStore }}</div>
  </div>
</template>
<style scoped lang="less"></style>
