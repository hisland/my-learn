const Service = require('egg').Service

console.log('load pluginFoo service')

class FooService extends Service {
  find() {
    console.log('call pluginFoo method find')
    return 'find'
  }
}

module.exports = FooService
