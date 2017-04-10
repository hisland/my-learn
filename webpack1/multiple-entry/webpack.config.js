module.exports = {
  entry: {
    bundle1: './entry1.js',
    bundle2: './entry2.js'
  },
  output: {
    // filename: 'bundle.js' // 这样前面生成的文件会被后面的覆盖掉, 要用下面的范名
    filename: '[name].js'
  },
  module:{
    loaders:[
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
}
