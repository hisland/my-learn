const gulp = require('gulp')

gulp.task('one', function(done) {
  // do stuff
  done()
})

gulp.task('two', function(done) {
  // do stuff
  done()
})

gulp.task('three', function(done) {
  // do stuff
  done()
})

gulp.task('four', gulp.series('one', 'two'))

gulp.task(
  'five',
  gulp.series(
    'four',
    gulp.parallel('three', function(done) {
      // do more stuff
      done()
    })
  )
)

console.log(gulp.tree())

console.log(require('util').inspect(gulp.tree({ deep: true }), { depth: null }))
