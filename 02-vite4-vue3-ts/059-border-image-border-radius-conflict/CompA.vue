<script setup lang="tsx">
import { defineAsyncComponent } from 'vue'
import { onMounted, onUpdated } from 'vue'
import { ref, computed } from 'vue'

onMounted(() => {})
</script>
<template>
  <div>圆角半径大于边框宽度可内外层都是圆角</div>
  <div class="CompA">
    <div class="bb">纯色边框</div>
    <div class="bb cc">边框背景圆角没用</div>
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
  border: 20px solid red;
  border-radius: 30px;
  box-sizing: border-box;
}
.cc {
  top: 120px;
  left: 10px;

  border-image: linear-gradient(#e66465, #9198e5) 1;
}
</style>
