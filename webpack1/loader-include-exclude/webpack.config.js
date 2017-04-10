module.exports = {
  entry: {
    aa: './aa/a.js', // 在 include 里面, 但是被 exclude 了, 不处理
    bb: './bb/a.js', // 处理
    cc: './cc/a.js', // 没有在 include 里面, 不处理
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /aa/, // 如果有 exclude, 会排除这里面的, 即使在 include 里面也要排除
        include: /aa|bb/, // 如果有 include, 只处理这里面的
      },
    ]
  },
  babel: {
    babelrc: false,
    presets: [
      ['es2015'],
    ]
  },
}

/*

结论:
* loader 默认是 test 匹配的全部处理
* 如果指定 include, 则只处理 include 包含的
* 如果指定 exclude, 则从上面2条的结果里面再排除 exclude 匹配的

*/

