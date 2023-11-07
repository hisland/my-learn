<script setup lang="tsx">
import { ref, reactive, onMounted, computed } from 'vue'
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <div class="aa">abc 123</div>
    <div class="bb">这是中文</div>
    <div class="cc">abc 中英数字混合 123</div>
    <div>
      <span class="dd">abc 中英数字混合 123</span>
    </div>
    <div style="background: #1f1f1f">
      <span class="ee">abc 中英数字混合 123</span>
    </div>
  </div>
</template>
<style scoped lang="less">
.aa {
  font-family: web1;
}
.bb {
  font-family: local1;
}
.cc {
  font-family: web1, serif, local1;
}
.dd {
  background: linear-gradient(to right, red, blue);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.ee {
  background: linear-gradient(to bottom, #fff, blue);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-style: italic;
  font-weight: 700;
}
</style>

<style lang="less">
@font-face {
  font-family: web1;
  src: url('https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf')
    format('truetype');
}
@font-face {
  font-family: local1;
  src: url('./YouSheBiaoTiHei-2.ttf') format('truetype');
}
</style>
