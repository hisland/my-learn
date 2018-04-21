var gulp = require('gulp');

gulp.task('default', function() {
  gulp.src(['../gulpfile.js', '../src/*'], {base: '..'})
    .pipe(gulp.dest('c'))

  console.log('相对路径会根据**, base参数等来确定');
});
