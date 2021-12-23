<template>
  <div class="compa">
    <div>
      <button @click="show=!show">show {{show}}</button>
      <button @click="swapMove">swapMove 5</button>
      <input v-model.lazy="move1To">
      <input v-model="someText">
      <dom-portal :moveTo="move1To" v-if="show">
        <h1>aa {{move1To}} {{someText}}</h1>
        <h1>bb {{move1To}} {{someText}}</h1>
      </dom-portal>
    </div>
    <hr>
    <div id="hole1"></div>
    <div id="hole2"></div>
  </div>
</template>

<script>
import domPortal from './domPortal.js'

export default {
  components: {
    domPortal,
  },
  data() {
    return {
      show: true,
      someText: 'someText',

      move1To: '#hole1',
      moveCount: 0,
      swapList: ['#hole1', '#hole2', 'body'],
    }
  },
  methods: {
    swapMove() {
      this.moveCount++
      if (this.moveCount === this.swapList.length) {
        this.moveCount = 0
      }
      this.move1To = this.swapList[this.moveCount]
    },
  },
  updated() {
    console.log('aaupdated', window.prevA === this.$el)
  },
  mounted() {
    console.log('aamounted', window.prevA === this.$el)
    if (window.prevA) {
      window.prevA.push(this.$el)
    } else {
      window.prevA = [this.$el]
    }
  },
}
</script>

<style>
#hole1 {
  padding: 10px;
  border: 1px solid green;
  margin-bottom: 10px;
}
#hole2 {
  padding: 10px;
  border: 1px solid red;
}
</style>
