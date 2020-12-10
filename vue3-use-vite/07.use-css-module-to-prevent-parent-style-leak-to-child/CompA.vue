<template>
  <div class="wrap">parent leak to me</div>
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
