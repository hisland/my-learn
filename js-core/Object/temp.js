'use strict'

try {
  Object.assign(null, { aa: 1 })
  Object.assign(undefined, { aa: 1 })
} catch (error) {
  console.log('null undeinfed 不能作为 target')
}
try {
  // source 是 null, undefined, 相当于无操作, 不会报错
  console.log(Object.assign({ aa: 1 }, null))
  console.log(Object.assign({ aa: 1 }, undefined))
} catch (error) {
  console.log(error)
}
