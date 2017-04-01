const path = require('path');

console.log('')
console.log('函数方式: 接收env对象, 通过 --env.XXX=KKK 传递')
console.log('')

module.exports = function(env) {
  console.log('env: ', env)

  console.log('还可以返回 Promise, 异步配置')

  return new Promise(function(resolve, reject) {
    console.log('等 1s')
    setTimeout(function() {
      resolve({
        context: __dirname,
        entry: './entry.js',
        output: {
          path: path.join(__dirname, 'dist'),
          filename: 'bundle.js'
        }
      })
    }, 1000);
  })
}

