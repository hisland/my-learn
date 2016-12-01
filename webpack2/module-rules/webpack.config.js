module.exports = {
  entry: './entry.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    // loaders: [ // 兼容老方式, 不过建议使用新方式
    //   {test: /\.css$/, loader: 'css-loader'}
    // ],
    rules: [ // 用 rules 代替 loaders
      // webpack2 使用 use , 兼容老的 loader
      // {test: /\.css$/, loader: 'css-loader'}, // 默认不能省略 -loader 后缀, 不过可以通过配置来兼容1.0的可省略方式

      // 下面这3个等价
      // {test: /\.css$/, use: 'css-loader'}, // 使用 use 代替老的 loader
      // {test: /\.css$/, use: ['css-loader']}, // 使用 数组
      { test: /\.css$/, use: [{ loader: 'css-loader' }] }, // 完整形式

      // 下面这3个等价
      // {test: /\.less$/, loader: 'css-loader!less-loader'}, // 老的!连接方式
      // {test: /\.less$/, use: ['css-loader', 'less-loader']}, // 使用 数组
      // {test: /\.less$/, use: [{loader: 'css-loader'}, {loader: 'less-loader'}]}, // 完整形式

      {
        test: /\.less$/,
        // issuer: function() { // import 当前资源 的 资源
        //   console.log('issuer', arguments)
        //   return true;
        // },
        // include: function() {
        //   console.log('include', arguments)
        //   return true;
        // },
        // resource: {
        //   and: [/\.less/],
        //   not: [/bb/]
        // },
        rules: [
        // {use: 'css-loader'}, // 嵌套rules数组, 从后往前执行
          { use: 'less-loader' }, // 完整形式
        ],
        use: 'css-loader' // 嵌套rules完成再执行自身的use
      },
    ],

    // 总的来说, rules 可以递归生成一个 loader树, 且每个loader都可以设置 option
    // 通过 test,include,exclude 3个 和 resource{and,or,not} 互斥
    // 优先级: exclude > include
    // resource优先级: 排除 > 包含
    //
  }
}

