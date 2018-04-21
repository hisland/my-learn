var gulp = require('gulp');
var PrependBuffer = require('./prependTextBuffer');
var PrependStream = require('./prependTextStream');

gulp.task('default', function() {
  gulp.watch('./*.txt', ['prependBuffer', 'prependStream'])
});

gulp.task('prependBuffer', function() {
  gulp.src('./some1.txt')
    .pipe(PrependBuffer('前置'))
    .pipe(gulp.dest('aa'))
});


gulp.task('prependStream', function() {
  gulp.src('./some2.txt', {
      buffer: false
    })
    .pipe(PrependStream('前置'))
    .pipe(gulp.dest('aa'))
});
