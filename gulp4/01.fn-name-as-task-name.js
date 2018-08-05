const gulp = require('gulp')

const aa = gulp.task(function hasName() {
  console.log(arguments)
})
console.log(aa)

const bb = gulp.task('hasName')
console.log(bb)
