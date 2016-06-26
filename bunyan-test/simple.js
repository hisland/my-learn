var bunyan = require('bunyan');

var log = bunyan.createLogger({name: 'app'})

log.info('hi')
log.warn({lang: 'fr'}, 'au hisland')

