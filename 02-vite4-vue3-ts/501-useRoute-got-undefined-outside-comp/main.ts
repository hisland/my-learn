import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import AppEntry from './AppEntry.vue'

const rootApp = createApp(AppEntry)

const routes = [
  { path: '/', component: () => import('./CompA.vue') },
  { path: '/about', component: () => import('./CompB.vue') },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
rootApp.use(router)

rootApp.mount('#app')

export default rootApp
