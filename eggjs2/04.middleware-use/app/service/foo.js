const Service = require('egg').Service

console.log('load service foo')

class FooService extends Service {
  find() {
    console.log('call FooService method find')
    return 'find'
  }
}

module.exports = FooService
