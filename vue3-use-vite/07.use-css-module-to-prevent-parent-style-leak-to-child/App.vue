<template>
  <div class="wrap">
    <CompA></CompA>
  </div>
  <div class="wrap">
    <CompC></CompC>
  </div>
</template>
<script>
import CompA from './CompA.vue'
import CompC from './CompC.vue'
export default {
  components: {
    CompA,
    CompC,
  },
}
</script>
<style scoped lang="scss">
.wrap {
  padding: 10px;
  border: 1px solid red;
  margin-bottom: 10px;
}
</style>
