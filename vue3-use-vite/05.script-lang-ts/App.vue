<template>
  <div>aa: {{ halo }}</div>
  <div>aa: {{ say }}</div>
  <div>aa: {{ come }}</div>
  <div>
    <button @click="add()">click</button>
  </div>
</template>
<script lang="ts">
import { Ref, ref, onMounted, computed } from 'vue'
export default {
  setup() {
    const halo = ref('god')
    const say = computed(() => {
      return halo.value + ' yes'
    })
    return {
      halo,
      say,
    }
  },
  computed: {
    come() {
      return this.halo + ' come'
    },
  },
  methods: {
    add() {
      this.halo = Math.random().toString(32).substr(2, 3)
    },
  },
}
</script>
<style scoped lang="scss">
div {
  color: red;
}
</style>
