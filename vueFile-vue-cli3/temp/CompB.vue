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
      a: {}
    }
  },
  watch: {
    'a.b.c'() {
      console.log(33)
    },
  },
  methods: {
    add() {
      this.val++
    },
  },
  mounted() {
    window.kkk = this
  },
}
</script>

<style scoped>
.compa {
  background: green;
}
</style>
