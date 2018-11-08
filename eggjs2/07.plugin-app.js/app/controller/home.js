'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    const { service, session, app } = ctx
    const { request, response, helper } = ctx
    const { query, body, headers } = request

    this.ctx.body = 'halo'
  }
}

module.exports = HomeController
