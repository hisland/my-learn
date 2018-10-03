<template>
  <div id="app">
    <CompA></CompA>
    <hr />
    <pre>
      * directive 执行顺序跟 attr 顺序有关
    </pre>
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
