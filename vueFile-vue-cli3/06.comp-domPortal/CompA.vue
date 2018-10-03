<template>
  <div class="compa">
    <div>
      <button @click="show=!show">show {{show}}</button>
      <button @click="doTransport">doTransport</button>
      <input v-model.lazy="move1To">
      <input v-model="someText">
      <dom-portal :moveTo="move1To" v-if="show">
        <h1>aa {{move1To}} {{someText}}</h1>
      </dom-portal>
    </div>
    <hr />
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
      movePos: 0,
      transportList: ['#hole1', '#hole2', 'body'],
    }
  },
  methods: {
    doTransport(){
      this.movePos++
      if (this.movePos === 3) {
        this.movePos = 0
      }
      this.move1To = this.transportList[this.movePos]
    }
  },
}
</script>

<style>
#hole1{padding: 10px;border: 1px solid green;margin-bottom: 10px;}
#hole2{padding: 10px;border: 1px solid red;}
</style>
