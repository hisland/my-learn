<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
let halo = reactive({ aa: 1 })
console.log('init halo: ', halo)

function setRnd1() {
  halo = { aa: Math.random() }
  console.log('setRnd1 halo: ', halo)
}
function setRnd2() {
  Object.assign(halo, { aa: Math.random() })
  console.log('setRnd2 halo: ', halo)
}
</script>
<template>
  <div class="compa">
    <div>halo: {{ halo }}</div>
    <div>
      <div>
        reactive 变量不要重新赋值, 而是用 aa.bb='cc' 或者 Object.assign(aa, {
        bb: 'cc' }) 这样的方式赋值
      </div>
      <button @click="setRnd1">setRnd1 override var value DONT'T USE</button>
      <button @click="setRnd2">setRnd2 Object.assign ok</button>
    </div>
  </div>
</template>
<style scoped>
.compa {
  width: 300px;
  height: 500px;
  background-color: #eee;
}
</style>
