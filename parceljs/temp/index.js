import Vue from 'vue'
import comp1 from './comp1.vue'

new Vue({
  el: '#app',
  render(h) {
    return h(comp1)
  },
})
