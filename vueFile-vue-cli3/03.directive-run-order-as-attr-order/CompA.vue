<template>
  <div class="compa">
    <div>
      <button @click="show1=!show1">show1 {{show1}}</button>
      <h1 v-dom-portal1="move"  v-dom-portal2="move">aa</h1>
    </div>
    <div>
      <button @click="show2=!show2">show2 {{show2}}</button>
      <h1 v-dom-portal2="move"  v-dom-portal1="move">bb</h1>
    </div>
  </div>
</template>

<script>
import { directive1, directive2 } from './plugins/domPortal3.js'

export default {
  directives: {
    'dom-portal1': directive1,
    'dom-portal2': directive2,
  },
  data() {
    return {
      show1: false,
      show2: false,
      move: false,
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
</style>
