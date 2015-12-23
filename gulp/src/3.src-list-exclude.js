var gulp = require('gulp');

gulp.task('default', function() {
  var a = gulp.src(['*.js', '!1.src-string.js']);
  console.log('!前缀用来排除文件');
});
