var gulp = require('gulp');

gulp.task('default', function() {
  var a = gulp.src(['../gulpfile.js', '../gulpfile.babel.js']);
  console.log('数组表示一堆文件, 每个又是blob方式匹配的多个文件');
});
