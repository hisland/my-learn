<script setup lang="tsx">
import { ref, reactive, onMounted, computed } from 'vue'
import CompB from './CompB.vue'

function got1(...args: any[]) {
  console.log('got1: ', args)
}

function got2(...args: any[]) {
  console.log('got2: ', args)
}

const isVisible = ref(true)
const num = ref(11)

function setVisbile() {
  isVisible.value = !isVisible.value
}
function setNum() {
  num.value += 2
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>123</div>
    <button @click="setVisbile">
      setVisbile
      {{ isVisible ? '是' : '否' }}
    </button>
    <button @click="setNum">
      setNum 值变更每次都会执行 ref 函数
      {{ num }}
    </button>
    <template v-if="isVisible">
      <div
        style="height: 100px; border: 1px solid pink"
        :ref="got2"
      >
        <CompB :ref="got1" :num="num"></CompB>
      </div>
    </template>
  </div>
</template>
<style scoped lang="less"></style>
