<template>
  <div class="compa">
    <div>
      <button @click="show1=!show1">show1 {{show1}}</button>
      <button @click="move1To=false">aaNotMove</button>
      <input v-model.lazy="move1To">
      <h1 v-if="show1" v-dom-portal1="move1To">aa {{move1To}}</h1>
    </div>
    <div>
      <button @click="show2=!show2">show2 {{show2}}</button>
      <button @click="move2To=false">bbNotMove</button>
      <input v-model.lazy="move2To">
      <h1 v-if="show2" v-dom-portal1="move2To">bb {{move2To}}</h1>
    </div>
    <hr />
    <div id="hole1"></div>
    <div id="hole2"></div>
  </div>
</template>

<script>
import directive from './plugins/domPortal.js'

export default {
  directives: {
    'dom-portal1': directive,
  },
  data() {
    return {
      show1: false,
      show2: false,
      move1To: '#hole1',
      move2To: '#hole1',
    }
  },
  methods: {
    setRandom() {
      this.what = Math.random()
      // console.log(this.$refs.hh, this.$refs.hh.parentNode)
    },
  },
}
</script>

<style>
#hole1{padding: 10px;border: 1px solid green;margin-bottom: 10px;}
#hole2{padding: 10px;border: 1px solid red;}
</style>
