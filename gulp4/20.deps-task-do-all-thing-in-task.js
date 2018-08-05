const gulp = require('gulp')
const debug = require('gulp-debug')

const globFiles = 'src/*.js'

gulp.task('one', function() {
  gulp
    .src(globFiles)
    .pipe(debug({ title: 'pug-files:' }))
    .pipe(gulp.dest('z-out4'))
})

gulp.task('default', function() {
  const watcher = gulp.watch(globFiles)
  watcher.on('change', gulp.parallel('one')) // 直接依赖 one, 每次都是更新所有文件
})
