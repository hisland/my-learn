const gulp = require('gulp')

gulp.task('default', function() {
  console.log('11, src return: ', gulp.src(['./src/aa.js']))
  console.log(
    '22, pipe return: ',
    gulp.src(['./src/aa.js']).pipe(gulp.dest('./z-out2'))
  )
})
