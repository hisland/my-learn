import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'

import AppEntry from './AppEntry.vue'

const rootApp = createApp(AppEntry)

rootApp.mount('#app')

export default rootApp
