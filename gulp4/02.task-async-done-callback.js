const gulp = require('gulp')

gulp.task(function hasName(done) {
  setTimeout(function() {
    console.log('done')
    done()
  }, 300)
})
