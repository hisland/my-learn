<template>
  <div class="wrap">
    <button @click="toggle1()">切换aa</button>
    <div>createApp 只能 mount -> unmount</div>
    <div>createApp 不能 mount -> unmount -> mount</div>
  </div>

  <div class="sub-app1"></div>
  <div class="sub-app2"></div>
</template>
<script>
import { createApp } from 'vue'

import CompA from './CompA.vue'

const suba = createApp(CompA)

export default {
  data() {
    return {
      isSuba: false,
    }
  },
  methods: {
    toggle1() {
      if (this.isSuba) {
        this.isSuba = false
        suba.unmount('.sub-app1')
      } else {
        this.isSuba = true
        suba.mount('.sub-app1')
      }
    },
  },
}
</script>
<style scoped lang="scss">
.wrap {
  background-color: palevioletred;
}

.sub-app1 {
  padding: 10px;
  background-color: pink;
}
.sub-app2 {
  padding: 10px;
  background-color: cyan;
}
</style>
