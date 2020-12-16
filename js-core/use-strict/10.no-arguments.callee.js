'use strict'
const ff = function () {
  return arguments.callee
}
ff() // 报错
