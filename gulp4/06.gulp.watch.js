const gulp = require('gulp')

gulp.task('default', function() {
  const watcher = gulp.watch('src/**/*.js');

  watcher.on('change', function(file) {
    console.log(file)
  })
})
