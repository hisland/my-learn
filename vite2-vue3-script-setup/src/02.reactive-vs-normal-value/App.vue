<script setup>
import { ref } from 'vue'
const count = ref(0)
let some = 1
</script>
<template>
  <div>
    <div>
      <button @click="count += 1">{{ count }} 自动解包, 模板里面不需要.value操作</button>
    </div>
    <div>
      <button @click="some += 1">{{ some }} 点击其实值变了, 只是没有响应式更新显示, 其它地方触发重新渲染时,这里能看到最新值</button>
    </div>
  </div>
</template>
