<template>
  <CompA class="pp" style="padding:10px"></CompA>
  <CompB class="pp" style="padding:10px"></CompB>
</template>
<script>
import CompA from './CompA.vue'
import CompB from './CompB.vue'
export default {
  components: {
    CompA,
    CompB,
  },
}
</script>
<style scoped lang="scss">
.pp {
  color: green;
}
</style>
