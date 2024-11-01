<script setup lang="tsx">
import { defineAsyncComponent } from 'vue'
import { onMounted, onUpdated } from 'vue'
import { ref, computed } from 'vue'

function click1(evt: MouseEvent) {
  console.log('evt: ', evt.target)
}
onMounted(() => {})
</script>
<template>
  <div class="CompA" @click="click1">
    <div>这是一串文本这是一串文本这是一串文本</div>
    <div>这是一串文本这是一串文本这是一串文本</div>
    <div>这是一串文本这是一串文本这是一串文本</div>
    <div>这是一串文本这是一串文本这是一串文本</div>
    <div>这是一串文本这是一串文本这是一串文本</div>
    <div class="masked">
      <div>星星中星星中星星中星星中</div>
      <div>星星中星星中星星中星星中</div>
      <div>星星中星星中星星中星星中</div>
    </div>
    <div>
      <img src="./star.svg" style="width: 300px; height: 100px" />
    </div>
    <div
      style="
        width: 400px;
        height: 200px;
        background: url('./star.svg') no-repeat;
        background-size: 100% 100%;
      "
    ></div>
    <div>svg不要 viewBox, 使其适应父容器的宽高, 就能随意拉伸</div>
  </div>
</template>
<style scoped>
.CompA {
  background-color: #eee;
  position: relative;
}
.masked {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 300px;
  height: 100px;
  background-color: pink;
  /* -webkit-mask-image: url(star.svg); */
  mask-image: url(star.svg);
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  transform: rotateY(30deg) rotateX(30deg);
}
</style>
