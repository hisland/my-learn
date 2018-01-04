const gulp = require('gulp')

gulp.task('task1', function(done) {
  setTimeout(function() {
    done()
  }, 100)
})
gulp.task('task2', function(done) {
  setTimeout(function() {
    done()
  }, 30)
})

gulp.task('default', gulp.parallel('task1', 'task2'))
