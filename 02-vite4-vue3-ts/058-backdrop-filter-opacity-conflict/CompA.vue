<script setup lang="tsx">
import { defineAsyncComponent } from 'vue'
import { onMounted, onUpdated } from 'vue'
import { ref, computed } from 'vue'

onMounted(() => {})
</script>
<template>
  <div>backdrop-filter 的时候用 opacity 会有影响</div>
  <div class="CompA">
    <div class="bb">opacity 没啥效果</div>
    <div class="bb cc">半透明在背景色上, 不要用 opacity</div>
    <div>里面有文字里面有文字里面有文字里面有文字</div>
    <div>里面有文字里面有文字里面有文字里面有文字</div>
    <div>里面有文字里面有文字里面有文字里面有文字</div>
    <div>里面有文字里面有文字里面有文字里面有文字</div>
    <div>里面有文字里面有文字里面有文字里面有文字</div>
    <div>里面有文字里面有文字里面有文字里面有文字</div>
  </div>
</template>
<style scoped>
.CompA {
  background-color: #eee;
  position: relative;
  width: 300px;
  height: 300px;
}
.bb {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 10px;
  left: 10px;
  backdrop-filter: blur(3px);
  border-radius: 8px;
  background: rgba(255, 0, 0);
  opacity: 0.5;
}
.cc {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 120px;
  left: 10px;
  backdrop-filter: blur(3px);
  border-radius: 8px;
  background: rgba(255, 0, 0, 0.5);
  opacity: 1;
}
</style>
