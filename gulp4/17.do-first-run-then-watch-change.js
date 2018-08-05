const gulp = require('gulp')

gulp.task('one', function() {
  const globFiles = 'src/*.js'
  const watcher = gulp.watch(globFiles)
  watcher.on('change', function(path) {
    console.log('change: ', path)
    doRun(path)
  })
  doRun(globFiles)
  function doRun(path) {
    gulp.src(path).pipe(gulp.dest('z-out4'))
  }
})

gulp.task('default', gulp.parallel('one'))
