<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import CompB from './CompB.vue'

const isVisible = ref(true)
function toggleVisible() {
  isVisible.value = !isVisible.value
}

const refDivArr = ref('aa')
const refCompArr = ref('aa')

const refDivArr2 = ref('aa')
const refCompArr2 = ref('aa')

const refDivArr3 = ref('aa')
const refCompArr3 = ref('aa')
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <h3>ref 在 v-for 里面, 自动变成数组, 不管原来是什么值</h3>
    <div>isVisible {{ isVisible ? 'yes' : 'no' }}</div>
    <button @click="toggleVisible">toggleVisible</button>

    <hr />
    <div>refDivArr: {{ refDivArr }}</div>
    <div>refCompArr: {{ refCompArr }}</div>
    <div v-if="isVisible" style="height: 100px; border: 1px solid pink">
      single
      <div ref="refDivArr">
        <CompB ref="refCompArr"></CompB>
      </div>
    </div>

    <hr />
    <div>refDivArr2.length: {{ refDivArr2 }}</div>
    <div>refCompArr2.length: {{ refCompArr2 }}</div>
    <div v-if="isVisible" style="height: 100px; border: 1px solid pink">
      array 1 item
      <div v-for="(vv0, index0) in 1" :key="index0" ref="refDivArr2">
        <CompB ref="refCompArr2"></CompB>
      </div>
    </div>

    <hr />
    <div>refDivArr3.length: {{ refDivArr3 }}</div>
    <div>refCompArr3.length: {{ refCompArr3 }}</div>
    <div v-if="isVisible" style="height: 100px; border: 1px solid pink">
      array 3 item
      <div v-for="(vv0, index0) in 3" :key="index0" ref="refDivArr3">
        <CompB ref="refCompArr3"></CompB>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
