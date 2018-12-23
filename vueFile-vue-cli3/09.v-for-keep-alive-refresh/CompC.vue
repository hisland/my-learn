<template>
  <div class="compc">
    <h1>compc</h1>
    <div>
      <button @click="minus">minus</button>
    </div>
    <div>{{val}}</div>
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
