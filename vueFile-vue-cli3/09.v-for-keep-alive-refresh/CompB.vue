<template>
  <div class="compb">
    <h1>compb</h1>
    <div>
      <button @click="minus">minus</button>
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
    minus() {
      this.val--;
    }
  }
};
</script>

<style>
</style>
