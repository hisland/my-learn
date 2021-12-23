import Vue from 'vue'

import App from './App.vue'

Vue.config.productionTip = false

Vue.component('CompA', () =>
  import(/* webpackChunkName: "CommonCompA" */ './CompA.vue')
)

new Vue(App)
