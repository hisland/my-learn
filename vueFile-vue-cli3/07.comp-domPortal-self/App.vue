<template>
  <div id="app">
    <div>
      <button @click="toggle()">show {{show}}</button>
    </div>
    <CompB v-if="show"></CompB>
  </div>
</template>

<script>
const CompA = () => import(/* webpackChunkName: "CompA" */ './CompA.vue')
const CompB = () => import(/* webpackChunkName: "CompB" */ './CompB.vue')

export default {
  el: '#app',
  components: {
    CompA,
    CompB,
  },
  name: 'app',
  data() {
    return {
      show: true,
    }
  },
  methods: {
    toggle() {
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style>
</style>
