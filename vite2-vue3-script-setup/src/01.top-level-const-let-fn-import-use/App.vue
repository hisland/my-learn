<script setup>
import Sub from "./Sub.vue";
import { foo } from "./util";
const halo = 1
let god = 2
function some() {
  console.log('some')
}
</script>

<template>
  <div>
    <div>halo: {{ halo }}</div>
    <div>god: {{ god }}</div>
    <div>
      <button @click="some">顶层函数</button>
    </div>
    <div>
      <button @click="foo">导入的函数</button>
    </div>
    <div>
      子组件
      <Sub></Sub>
    </div>
  </div>
</template>
