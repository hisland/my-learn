const gulp = require('gulp')

gulp.task(function hasName() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('done')
      resolve()
    }, 300)
  })
})
