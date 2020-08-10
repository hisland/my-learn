<template>
  <div :class="$style.wrap">
    <div>use module for signle root node, not leak</div>
    <div class="other">other</div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  methods: {},
}
</script>
<style module lang="scss">
.wrap {
  background-color: pink;
}
</style>

<style scoped lang="scss">
.other {
  background-color: cyan;
}
</style>
