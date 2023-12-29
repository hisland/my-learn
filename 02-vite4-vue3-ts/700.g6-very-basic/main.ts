import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'

import AppEntry from './AppEntry.vue'

const rootApp = createApp(AppEntry)

const pinia = createPinia()
rootApp.use(pinia)

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
