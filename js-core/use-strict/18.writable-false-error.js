'use strict'

const oo = {}
Object.defineProperty(oo, 'vv', {
  value: 1,
  writable: false,
})
oo.vv = 2 // 报错
