const gulp = require('gulp')

gulp.task('default', function() {
  gulp.watch('src/**/*.js', function(done) {
    console.log(done)
    done()
  })
})
