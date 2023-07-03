<script setup lang="tsx">
import CompB from './CompB.vue'
import { ref, reactive } from 'vue'
const vala1 = ref('a-init-title')
const vala2 = ref('a-init-foo')
const obj = reactive({
  foo1: 'foo1',
  foo2: 'foo2',
})
</script>
<template>
  <div>
    <div>compa vala1: {{ vala1 }}</div>
    <div>compa vala2: {{ vala2 }}</div>
    <CompB a1="a1" v-model:title="vala1" v-model:foo="vala2"></CompB>
    <div>compa obj: {{ obj }}</div>
    <CompB a1="a1" v-model:title="obj.foo1" v-model:foo="obj.foo2"></CompB>
  </div>
</template>
