const gulp = require('gulp')


gulp.task('default', function(done) {
  console.log(arguments)
  done()
})

console.log('this end')



// 运行 node-dev ./node_modules/.bin/gulp
// 修改此文件会自动加载
