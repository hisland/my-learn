const gulp = require('gulp')

gulp.task('default', function() {
  const watcher = gulp.watch('src/**/*.js')
  watcher.on('change', function(path, stats) {
    console.log(path, stats)
  })
})
