var winston = require('winston');

winston.add(winston.transports.File, {filename: 'some.log'})

winston.log('info', 'halo1')
winston.info('halo21')

winston.level = 'debug';
winston.log('debug', 'aha1')

winston.info('halo333')



