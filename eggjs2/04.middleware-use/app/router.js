'use strict'

module.exports = app => {
  const { router, controller, middleware } = app

  const { mm } = middleware

  router.get('/', mm({ aa: 1 }), mm({ aa: 2 }), controller.home.index)
}
