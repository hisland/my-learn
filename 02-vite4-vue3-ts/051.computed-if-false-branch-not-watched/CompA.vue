<script setup lang="tsx">
import { defineAsyncComponent } from 'vue'
import { onMounted, onUpdated } from 'vue'
import { ref, computed } from 'vue'

const aa1 = ref(1)
const aa2 = ref(1)
const biggerThan10 = computed(() => {
  return aa1.value > 10
})
const cc = computed(() => {
  if (biggerThan10.value) {
    return aa2.value
  } else {
    return 'less'
  }
})
</script>
<template>
  <div class="CompA" style="border: 1px solid purple; padding: 10px">
    <div>
      <input type="text" v-model="aa2" />
    </div>
    <div>cc: {{ cc }}</div>
    <div>只有 aa2 变化, cc 不会更新, 因为在 if false 里面才读取到</div>
  </div>
</template>
<style scoped></style>
