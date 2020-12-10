<template>
  <div>{{halo}} multi root node aa</div>
  <div>{{halo}} multi root node bb</div>
  <div>
    multi root node cc
    <button @click="add()">click</button>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
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
div {
  color: red;
}
</style>
