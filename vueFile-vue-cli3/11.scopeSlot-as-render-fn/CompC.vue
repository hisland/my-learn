<template>
  <div class="compc">
    <input type="text" :value="val">
  </div>
</template>

<script>
let count = 1
export default {
  components: {},
  props: {
    compName: null,
  },
  data() {
    return {
      val: count++,
    }
  },
  methods: {},
  created() {
    console.log('created CompC')
  },
  mounted() {
    console.log('mounted CompC')
  },
}
</script>

<style scoped>
.compc {
  background: purple;
}
</style>
