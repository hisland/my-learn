<template>
  <div>
    <div>单个根节点可以自动获得 class style, 不过还是要看 inheritAttrs: true, 才行, 默认即是 true</div>
    <div>{{ halo }} single root node aa, got parent setting style/class</div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  // inheritAttrs: false, // 这里指定为 false 则不行
  setup() {
    const halo = ref(98)
    return {
      halo,
    }
  },
  methods: {
    add() {
      this.halo++
    },
  },
}
</script>
<style scoped lang="scss">
</style>
