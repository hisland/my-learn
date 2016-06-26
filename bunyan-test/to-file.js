var bunyan = require('bunyan');

var log = bunyan.createLogger({
  name: 'app',
  streams: [{
    path: './some.log'
  }]
})

log.info('hi')
log.warn({ lang: 'fr' }, 'au hisland')
