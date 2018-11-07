<template lang="pug">
div
  h1 {{halo}}
  p {{desc}}
</template>
<script>
export default {
  data() {
    return {
      halo: 'hdl',
      desc: 'my name',
    }
  },
}
</script>
<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
