<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import type { Ref } from 'vue'
import { inject } from 'vue'

const injectObj = inject('some-key')
console.log('injectObj: ', injectObj)

function showInject() {
  console.log('injectObj: ', injectObj)
}
</script>
<template>
  <div class="wrap" style="border: 1px solid purple; padding: 10px">
    <div style="color: red">得不到动态调用 provide 的值</div>
    <button @click="showInject">showInject</button>
  </div>
</template>
<style scoped lang="less"></style>
