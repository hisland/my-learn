'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    const { session, app, request } = ctx
    const { query, body, headers } = request

    this.ctx.body = body
  }
}

module.exports = HomeController
