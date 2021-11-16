<script setup>
import * as Sub from "./sub.js";
console.log(Sub)
</script>

<template>
  <div>
    <h1>命名空间组件, 但是 volar 好像语法支持不行, 格式化也不行</h1>
    <Sub.Sub1></Sub.Sub1>
    <Sub.Sub2></Sub.Sub2>
  </div>
</template>
