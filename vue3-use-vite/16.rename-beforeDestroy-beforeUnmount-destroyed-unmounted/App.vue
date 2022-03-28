<template>
  <div id="app">
    <div>
      <pre>
beforeDestroy -> beforeUnmount
destroyed -> unmounted

vue 3 生命周期命名变更
</pre
      >
      <div>
        <button @click="show2 = !show2">{{ show2 }}</button>
      </div>
      <CompA v-if="show2"></CompA>
    </div>
  </div>
</template>

<script>
import CompA from './CompA.vue'

export default {
  el: '#app',
  components: {
    CompA,
  },
  data() {
    return {
      show2: false,
    }
  },
  methods: {},
}
</script>

<style></style>
