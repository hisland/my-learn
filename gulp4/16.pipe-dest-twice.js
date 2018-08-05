const gulp = require('gulp')

gulp.task('default', function() {
  return gulp
    .src(['./src/aa.js'])
    .pipe(gulp.dest('./z-out3-1'))
    .pipe(gulp.dest('./z-out3-2'))
})
