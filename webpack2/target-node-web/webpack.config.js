const path = require('path');


console.log('-- target:web 没有 fs 模块, 打包的时候报错 --')


module.exports = [{
  target: 'node',
  entry: {
    main: ['./aa', './bb'],
  },
  output: {
    path: path.join(__dirname, 'dist-node'),
    filename: '[name].js'
  }
}, {
  target: 'web',
  entry: {
    main: ['./aa', './bb'],
  },
  output: {
    path: path.join(__dirname, 'dist-web'),
    filename: '[name].js'
  }
}]
