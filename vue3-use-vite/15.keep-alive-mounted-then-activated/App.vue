<template>
  <div id="app">
    <div>
      <div>
        <button @click="show1 = !show1">keep-alive {{ show1 }}</button>
      </div>
      <keep-alive>
        <CompA v-if="show1"></CompA>
      </keep-alive>
    </div>
    <div>
      <div>
        <button @click="show2 = !show2">不是 keep-alive {{ show2 }}</button>
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
      show1: false,
      show2: false,
    }
  },
  methods: {},
}
</script>

<style></style>
