module.exports = {
  entry: './entry.js', // chunk名是 main

  entry: ['./a.js', './b.js'], // chunk名是 main , 按顺序合并

  entry: { // 对象是多个chunk
    aa: './entry.js', // chunk名是 aa
    bb: ['./a.js', './b.js'], // chunk名是 bb , 按顺序合并
  }
  output: {
    path: __dirname,
    filename: 'bundle.js', // filename 固定成 bundle
    filename: '[name].js', // filename 会使用 上面的 chunk-name.js
  },
  module:{
    loaders:[
      {test: /\.css$/, loader: 'style!css'}
    ]
  }
}
