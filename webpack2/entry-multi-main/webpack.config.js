const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    main: ['./aa', './bb'], // 从左往右一个一个导入, 最后一个作为 main 的 exports
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  }
}
