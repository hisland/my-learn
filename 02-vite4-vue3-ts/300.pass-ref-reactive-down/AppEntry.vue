<script setup lang="tsx">
import { ref, reactive, onMounted, computed } from 'vue'
import { watch } from 'vue'
import CompB from './CompB.vue'

const ref1 = ref(33)
const reactive1 = reactive({
  aa: 1,
  bb: 2,
})
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>直接传递 ref 自动拆包成 value, reactive 原样传递</div>
    <CompB :ref1="ref1" :reactive1="reactive1"></CompB>
  </div>
</template>
<style scoped lang="less"></style>
