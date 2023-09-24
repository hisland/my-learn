<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import type { Ref } from 'vue'
import { inject } from 'vue'

const injectObj = inject('some-key')
console.log('injectObj: ', injectObj)

function setRef1() {
  injectObj.ref1.value.obj = 'sub obj' + Math.random()
}
function setReactive1() {
  injectObj.reactive1.kk = 'sub kk' + Math.random()
}
</script>
<template>
  <div class="wrap" style="border: 1px solid purple; padding: 10px">
    <div>inject 得到的 ref 要 ref.value, 和 props 传递下来的不一样</div>
    <button @click="setRef1">setRef1</button>
    <button @click="setReactive1">setReactive1</button>

    <div>injectObj.ref1: {{ injectObj.ref1 }}</div>
    <div>injectObj.reactive1: {{ injectObj.reactive1 }}</div>
  </div>
</template>
<style scoped lang="less"></style>
