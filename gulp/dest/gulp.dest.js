var gulp = require('gulp');

gulp.task('default', function() {
  gulp.src('../gulpfile.js')
    .pipe(gulp.dest('a'))
    .pipe(gulp.dest('b'))

  console.log('同一份src, 可以无限pipe到不同目录');
  console.log('dest会自动创建目录, 并覆盖已存在文件');


  gulp.src(['../gulpfile.js', '../src/*'], {base: '..'})
    .pipe(gulp.dest('c'))

});
