import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

import * as aa from './aa.js'
console.log('aa: ', aa)

import * as bb from './bb.ts'
console.log('bb: ', bb)

import * as cc from './cc.mjs'
console.log('cc: ', cc)

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

app.mount('#app')
