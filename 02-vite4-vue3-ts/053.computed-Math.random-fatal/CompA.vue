<script setup lang="tsx">
import { defineAsyncComponent } from 'vue'
import { onMounted, onUpdated } from 'vue'
import { ref, computed } from 'vue'

const aa1 = ref(0)
const aa2 = ref(10)
const cc = computed(
  () => {
    console.log('computed cc: ')
    if (Math.random() < 0.5) {
      return 'aa1: ' + aa1.value
    } else {
      return 'aa2: ' + aa2.value
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
    </div>
    <div>cc: {{ cc }}</div>
    <div>
      computed 使用了 Math.random 的值作为 if-else 判断, 会导致分支切换之后,
      另外分支的变化永远不触发 computed 更新
    </div>
  </div>
</template>
<style scoped></style>
