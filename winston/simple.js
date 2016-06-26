var winston = require('winston');

winston.log('info', 'halo')
winston.info('halo2')

winston.level = 'debug';
winston.log('debug', 'aha')

winston.log('some') // 不起作用,




