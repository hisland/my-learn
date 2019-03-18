<template>
  <div id="app">
    <div>{{bbq}}</div>
    <CompB :val="bbq">
      <div>some</div>
      <slot></slot>
    </CompB>
  </div>
</template>

<script>
export default {
  el: '#app',
  components: {},
  data() {
    return {
      bbq: '',
    }
  },
  methods: {},
  beforeCreate() {
    console.log('app: beforeCreate', this.$slots.default)
  },
  created() {
    console.log('app: created', this.$slots.default)
  },
  mounted() {},
}
</script>

<style>
</style>
