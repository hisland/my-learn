<template>
  <div id="app">
    <CompA>
      <div>default</div>
      <div slot="aa">aa</div>
      <div slot="bb" slot-scope="what">bb {{what.foo}}</div>
      <div slot="cc">cc</div>
    </CompA>
  </div>
</template>

<script>
const CompA = () => import(/* webpackChunkName: "CompA" */ './CompA.vue')

export default {
  components: {
    CompA,
  },
  name: 'app',
}
</script>

<style>

</style>
