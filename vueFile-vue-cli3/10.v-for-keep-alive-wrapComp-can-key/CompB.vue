<template>
  <div class="compb">
    <h1>compb</h1>
    <div>
      <button @click="add">add</button>
    </div>
    <div>b: {{val}}</div>
  </div>
</template>

<script>
let count = 3
export default {
  components: {},
  data() {
    return {
      val: (count -= 10),
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
