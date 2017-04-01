const path = require('path');

console.log('')
console.log('函数方式: 接收env对象, 通过 --env.XXX=KKK 传递')
console.log('')

module.exports = function(env) {
  console.log('env: ', env)

  return [{
    context: __dirname,
    entry: './entry.js',
    output: {
      path: path.join(__dirname, 'dist1'),
      filename: 'bundle1.js'
    }
  }, {
    context: __dirname,
    entry: './entry.js',
    output: {
      path: path.join(__dirname, 'dist2'),
      filename: 'bundle2.js'
    }
  }];
}

