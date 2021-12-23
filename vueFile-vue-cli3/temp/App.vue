<template>
  <div id="app">
    <div>
      <input type="text" v-model="bbq" />
      <span>{{ bbq }}</span>
    </div>
    <CompA>
      <template v-slot:hi="{ hi }">
        <div>hi: {{ hi }} {{ hello(2) }}</div>
      </template>
    </CompA>
  </div>
</template>

<script>
export default {
  el: '#app',
  components: {},
  data() {
    return {
      bbq: 'say ya',
    }
  },
  methods: {
    hello(num) {
      console.log('hello', num)
    },
  },
  beforeCreate() {
    console.log('app: beforeCreate', this.$slots)
  },
  created() {
    console.log('app: created', this.$slots)
  },
  mounted() {},
}
</script>

<style></style>
