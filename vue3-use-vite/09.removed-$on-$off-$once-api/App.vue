<template>
  <div>移除了 $on $off $once</div>
  <div>自然也没有了 hook:xxx 如: hook:mounted 之类的东西</div>
</template>
<script lang="ts">
import { ref, onBeforeMount, onMounted, computed } from 'vue'
export default {
  created() {
    console.log(this)
    this.$on('hook:mounted', function () {
      console.log(1, 'hook:mounted in created')
    })
  },
  mounted() {
    console.log(2, 'mounted')
  },
}
</script>
<style scoped lang="scss">
div {
  color: red;
}
</style>
