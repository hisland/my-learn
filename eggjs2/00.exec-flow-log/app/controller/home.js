'use strict'

console.log('load home')

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg'
  }
}

module.exports = HomeController
