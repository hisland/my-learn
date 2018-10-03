<template>
  <div id="app">
    <CompA></CompA>
    <hr />
    <pre>
      * 子元素不要使用 v-if, 可以用 v-show
      * dom-portal 自身可以用 v-if
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
