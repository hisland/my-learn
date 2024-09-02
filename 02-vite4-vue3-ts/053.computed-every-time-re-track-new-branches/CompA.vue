<script setup lang="tsx">
import { defineAsyncComponent } from 'vue'
import { onMounted, onUpdated } from 'vue'
import { ref, computed } from 'vue'

const aa1 = ref(0)
const aa2 = ref(10)
const aa3 = ref(100)
const cc = computed(
  () => {
    console.log('computed cc: ')
    if (aa1.value % 2 === 1) {
      return 'aa2: ' + aa2.value
    } else {
      return 'aa3: ' + aa3.value
    }
  },
  {
    onTrack: (evt) => {
      console.log('onTrack evt: ', evt)
    },
    onTrigger: (evt) => {
      console.log('onTrigger evt: ', evt)
    },
  }
)
</script>
<template>
  <div class="CompA" style="border: 1px solid purple; padding: 10px">
    <div>
      <div>aa1: <input type="number" v-model="aa1" /></div>
      <div>aa2: <input type="number" v-model="aa2" /></div>
      <div>aa3: <input type="number" v-model="aa3" /></div>
    </div>
    <div>cc: {{ cc }}</div>
    <div>
      全是响应式, 每次会重新收集依赖, if-else 分支另外没有被收集的变化不会触发
      computed 重新执行, 因为执行也没意义
    </div>
  </div>
</template>
<style scoped></style>
