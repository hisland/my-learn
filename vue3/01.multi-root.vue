<template>
  <div>{{halo}} aa</div>
  <div>{{halo}} bb</div>
  <div>
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
