import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false

Vue.component('CompB', () =>
  import(/* webpackChunkName: "CompCommonD" */ './CompB.vue')
)

new Vue(App)
