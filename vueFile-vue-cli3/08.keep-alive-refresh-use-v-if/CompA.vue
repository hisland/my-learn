<template>
  <div class="compa">
    <h1>compa</h1>
    <div>
      <button @click="add">add</button>
    </div>
    <div>{{val}}</div>

    <CompC></CompC>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      val: 11
    };
  },
  methods: {
    add() {
      this.val++;
    }
  }
};
</script>

<style>
</style>
