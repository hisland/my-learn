<template>
  <div id="app">
    <CompA></CompA>
    <hr />
    <pre>
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
