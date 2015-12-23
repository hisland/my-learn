var gulp = require('gulp');

gulp.task('default', function() {
  var a = gulp.src(['a.js', 'any.js']);
  console.log('不存在的文件自动忽略');
});
