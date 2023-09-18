<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import CompB from './CompB.vue'

const isVisible = ref(true)
function toggleVisible() {
  isVisible.value = !isVisible.value
}

const refDivSingle = ref(null)
watch(refDivSingle, (newEl) => {
  console.log('refDivSingle newEl: ', newEl)
})
const refCompSingle = ref(null)
watch(refCompSingle, (newEl) => {
  console.log('refCompSingle newEl: ', newEl)
})

const refDivArr = ref([])
// watch(
//   refDivArr,
//   (newEl) => {
//     console.log('refDivArr newEl: ', newEl)
//   },
//   { deep: true }
// )
const refCompArr = ref([])
// watch(
//   refCompArr,
//   (newEl) => {
//     console.log('refCompArr newEl: ', newEl)
//   },
//   { deep: true }
// )
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>refDivSingle: {{ refDivSingle }}</div>
    <div>refCompSingle: {{ refCompSingle }}</div>
    <hr />
    <div>refDivArr.length: {{ refDivArr.length }}</div>
    <div>refCompArr.length: {{ refCompArr.length }}</div>
    <hr />
    <div>isVisible {{ isVisible ? 'yes' : 'no' }}</div>
    <button @click="toggleVisible">toggleVisible</button>

    <div v-if="isVisible" style="height: 100px; border: 1px solid purple">
      single
      <div ref="refDivSingle">
        <CompB ref="refCompSingle"></CompB>
      </div>
    </div>
    <div v-if="isVisible" style="height: 100px; border: 1px solid pink">
      array
      <div v-for="(vv0, index0) in 3" :key="index0" ref="refDivArr">
        <CompB ref="refCompArr"></CompB>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
