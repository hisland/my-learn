'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    const { service, session, app } = ctx
    const { request, response, helper } = ctx
    const { query, body, headers } = request

    this.ctx.body = [
      app.extendApp(),
      ctx.extendContext(),
      request.extendRequest(),
      response.extendResponse(),
      helper.extendHelper(),
    ]
  }
}

module.exports = HomeController
