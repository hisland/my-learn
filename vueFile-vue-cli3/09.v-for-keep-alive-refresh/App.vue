<template>
  <div id="app">
    <div>
      <button @click="addOne">addOne</button>
      <button @click="doRefresh">refresh</button>
    </div>
    <div>
      <button
        @click="nowComp=index"
        v-for="(vv, index) in compList"
        :key="index"
      >show {{vv.compName}} {{index}}</button>
    </div>
    <template v-for="(vv, index) in compList">
      <keep-alive v-if="vv.cached" :key="index">
        <CompA v-if="nowComp === index"></CompA>
      </keep-alive>
    </template>
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
      nowComp: 0,
      compList: [
        {
          compName: 'CompA',
          cached: true,
        },
      ],
    }
  },
  methods: {
    addOne() {
      this.compList.push({
        compName: 'CompA',
        cached: true,
      })
    },
    doRefresh() {
      this.compList[this.nowComp].cached = false
      this.$nextTick(() => {
        this.compList[this.nowComp].cached = true
      })
    },
  },
}
</script>

<style>
</style>
