const gulp = require('gulp')

gulp.task('task1', function(done) {
  setTimeout(function() {
    console.log('task1 done: ')
    done()
  }, 300)
})
gulp.task('task2', function(done) {
  setTimeout(function() {
    console.log('task2 done: ')
    done()
  }, 100)
})

const rr = gulp.parallel('task1', 'task2', function(done) {
  console.log('task3 done: ')
  done()
})

console.log('gulp.parallel return fn: ', rr)
