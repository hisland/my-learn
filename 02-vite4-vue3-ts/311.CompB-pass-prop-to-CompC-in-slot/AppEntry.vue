<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { watch } from 'vue'
import CompB from './CompB.vue'
import CompC from './CompC.vue'

const ref1 = ref('1')
console.log('ref1: ', ref1)

function setRef1Val() {
  ref1.value = Math.random().toString(36)
}
onMounted(() => {
  console.log('AppEntry onMounted 1: ')
})
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>CompC 代码在 AppEntry 里面, 读取 CompB 传入的 slotProps</div>
    <button @click="setRef1Val">setRef1Val</button>
    <div>{{ ref1 }}</div>

    <div>
      <div style="color: red">必须在 template#slot 这里继续向下传才行</div>
      <CompB :ref1="ref1">
        <template #default="slotProps">
          <CompC v-bind="slotProps"></CompC>
        </template>
      </CompB>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
