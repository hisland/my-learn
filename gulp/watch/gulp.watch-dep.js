var gulp = require('gulp');

gulp.task('default', function() {

  gulp.watch(['gulp.watch2.js', 'gulp.watch.js'], ['dep']);
});

gulp.task('dep', function() {

  console.log(3);
});
