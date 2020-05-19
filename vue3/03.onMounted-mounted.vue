<template>
  <div>{{halo}} aa</div>
  <div>{{halo}} bb</div>
  <div>
    <button @click="add()">click</button>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {
    const halo = ref(98)

    onMounted(() => {
      console.log(33)
    })

    return {
      halo,
    }
  },
  methods: {
    add() {
      this.halo++
    },
  },
  mounted() {
    console.log(44)
  },
}
</script>
<style scoped lang="scss">
div {
  color: red;
}
</style>
