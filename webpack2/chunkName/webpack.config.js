const path = require('path');

module.exports = {
  entry: {
    main: './entry',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].[id].js', // 默认是 [id].js, 如果没有[name], [name]值取[id]
  }
}
