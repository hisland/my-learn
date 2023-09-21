<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
const item = ref('')

let count = 0

function test(evt) {
  console.log('@input val: ', evt.target.value, item.value)
  console.log('-------------------')
}
</script>
<template>
  <div class="compa">
    <div>某些输入法一边输入一边修改, 会导致问题</div>
    <input
      type="text"
      v-model="item"
      oninput="console.log('oninput 1', value, value.replace(/[^\w\u4E00-\u9FA5]/g, ''));value=value.replace(/[^\w\u4E00-\u9FA5]/g, '');console.log('oninput 2', value)"
      @input="test"
    />
  </div>
</template>
<style scoped>
.compa {
  width: 300px;
  height: 500px;
  background-color: #eee;
}
</style>
