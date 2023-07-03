<script setup lang="tsx">
import CompB from './CompB.vue'
import { ref, reactive } from 'vue'
const vala = ref('a-init-value')
</script>
<template>
  <div>
    <div>compa {{ vala }}</div>
    <CompB a1="a1" v-model:title="vala"></CompB>
  </div>
</template>
