'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    const { service, session, app, request } = ctx
    const { query, body, headers } = request

    this.ctx.body = ctx.ua
  }
}

module.exports = HomeController
