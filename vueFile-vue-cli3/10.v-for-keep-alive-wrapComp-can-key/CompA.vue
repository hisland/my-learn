<template>
  <div class="compa">
    <h1>compa</h1>
    <div>
      <button @click="add">add</button>
    </div>
    <div>a: {{val}}</div>
  </div>
</template>

<script>
let count = 3
export default {
  components: {},
  data() {
    return {
      val: (count += 10),
    }
  },
  methods: {
    add() {
      this.val++
    },
  },
}
</script>

<style>
</style>
