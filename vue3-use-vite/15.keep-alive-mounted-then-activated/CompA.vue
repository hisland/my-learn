<template>
  <div class="compa">hi2</div>
</template>

<script>
/* eslint-disable */

export default {
  components: {},
  data() {
    return {}
  },
  methods: {},

  beforeCreate() {
    console.log('CompA beforeCreate')
  },
  created() {
    console.log('CompA created')
  },
  beforeMount() {
    console.log('CompA beforeMount')
  },
  mounted() {
    console.log('CompA mounted')
  },
  beforeUpdate() {
    console.log('CompA beforeUpdate')
  },
  updated() {
    console.log('CompA updated')
  },
  activated() {
    console.log('CompA activated')
  },
  deactivated() {
    console.log('CompA deactivated')
  },

  beforeUnmount() {
    console.log('CompA beforeUnmount')
  },
  unmounted() {
    console.log('CompA unmounted')
  },
}
</script>

<style scoped>
.compa {
  background: green;
}
</style>
