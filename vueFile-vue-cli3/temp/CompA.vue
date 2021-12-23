<template>
  <div class="compa">
    <slot v-if="$scopedSlots.hi" name="hi" hi="hdl2"></slot>
    <span v-else>hi2</span>
  </div>
</template>

<script>
let count = 3
export default {
  components: {},
  data() {
    return {
      list: ['a', 'b'],
      val: (count += 10),
    }
  },
  methods: {
    add() {
      this.val++
    },
  },
  mounted() {
    console.log('compa: mounted', this.$slots, this.$scopedSlots)
  },
}
</script>

<style scoped>
.compa {
  background: green;
}
</style>
