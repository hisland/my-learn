var gulp = require('gulp');

gulp.task('default', function() {
  var a = gulp.src('../gulpfile.js');
  console.log('Returns a stream of Vinyl files that can be piped to plugins');
  console.log('blob方式匹配的多个文件');
});
