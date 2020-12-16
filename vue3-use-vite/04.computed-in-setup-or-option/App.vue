<template>
  <div>{{ halo }} aa</div>
  <div>{{ say }} bb</div>
  <div>{{ come }} bb</div>
  <div>
    <button @click="add()">click</button>
  </div>
</template>
<script>
import { ref, onMounted, computed } from 'vue'
export default {
  setup() {
    const halo = ref(98)
    const say = computed(() => {
      return halo.value + ' setup-computed'
    })
    return {
      halo,
      say,
    }
  },
  computed: {
    come() {
      return this.halo + ' option-computed'
    },
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
