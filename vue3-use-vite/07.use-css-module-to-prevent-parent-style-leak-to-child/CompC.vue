<template>
  <div :class="$style.wrap">
    <div>父组件没影响到我, 是因为根组件没有 class wrap, 因为 css-module 修改了名字</div>
    <div>inheritAttrs: false 也不能阻止根组件被父组件添加上 scoped 的 attr</div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  inheritAttrs: false,
  methods: {},
}
</script>
<style module lang="scss">
.wrap {
  background-color: pink;
}
</style>
