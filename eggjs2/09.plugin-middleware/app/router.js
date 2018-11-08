'use strict'

module.exports = app => {
  const { router, controller, middleware } = app

  const { foo } = middleware

  router.get('/', foo({ aa: 1 }), foo({ aa: 2 }), controller.home.index)
}
