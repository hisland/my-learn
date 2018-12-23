<template>
  <div id="app">
    <div>
      <button @click="nowComp='CompA'">show CompA</button>
      <button @click="nowComp='CompB'">show CompB</button>
      <button @click="doRefresh">refresh</button>
    </div>
    <keep-alive v-if="aliveShow.CompA" :key="123">
      <CompA v-if="nowComp === 'CompA'"></CompA>
    </keep-alive>
    <keep-alive v-if="aliveShow.CompB" :key="456">
      <CompB v-if="nowComp === 'CompB'"></CompB>
    </keep-alive>
  </div>
</template>

<script>
const CompA = () => import('./CompA.vue')
const CompB = () => import('./CompB.vue')

export default {
  components: {
    CompA,
    CompB,
  },
  data() {
    return {
      nowComp: 'CompA',
      showAlive: true,
      aliveShow: {
        CompA: true,
        CompB: true,
      },
    }
  },
  methods: {
    doRefresh() {
      this.aliveShow[this.nowComp] = false
      this.$nextTick((vv1, index1) => {
        this.aliveShow[this.nowComp] = true
      })
    },
  },
}
</script>

<style>
</style>
