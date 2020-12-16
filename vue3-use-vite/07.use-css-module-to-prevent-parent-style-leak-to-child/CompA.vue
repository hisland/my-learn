<template>
  <div class="wrap">根组件获得了父组件定义的css, 有时候是不需要的</div>
</template>
<script>
import { ref } from 'vue'
export default {
  methods: {},
}
</script>
<style scoped lang="scss">
.wrap {
  background-color: palevioletred;
}
</style>
