import { createApp } from 'vue'
import { createPinia } from 'pinia'

import AppEntry from './AppEntry.vue'

const rootApp = createApp(AppEntry)

const pinia = createPinia()
rootApp.use(pinia)

rootApp.mount('#app')

export default rootApp
