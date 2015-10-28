var gulp = require('gulp');

gulp.task('default', function() {
  gulp.src(['gulpfile.js']).pipe(gulp.dest('oneFile'));
  gulp.src(['gulpfile.js', 'gulp.task.js']).pipe(gulp.dest('2Files'));
});
