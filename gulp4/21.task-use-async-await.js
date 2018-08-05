const gulp = require('gulp')
const debug = require('gulp-debug')

const globFiles = 'src/*.js'

gulp.task('one', async function() {
  console.log('one start: ')
  await new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('one end: ')
      resolve(33)
    }, 1000)
  })
})

gulp.task('default', gulp.series('one'))
