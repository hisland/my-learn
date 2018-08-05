const gulp = require('gulp')

gulp.task('default', function() {
  console.log(3)
  arguments[0]() // must call done
  return Promise.resolve(3) // or return async value
})
