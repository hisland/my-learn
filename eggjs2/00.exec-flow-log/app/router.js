'use strict'

console.log('load router')

module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
}
