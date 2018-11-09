'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    const { service, session, app } = ctx
    const { request, response, helper } = ctx
    const { query, body, headers } = request

    app.messenger.broadcast('broadcast', 'broadcast')
    app.messenger.sendToAgent('sendToAgent', 'sendToAgent')

    app.messenger.sendToApp('sendToApp', 'app sendToApp')

    // 没有 app.messenger.sendRandom

    this.ctx.body = 'abc'
  }
}

module.exports = HomeController
