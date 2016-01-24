var gulp = require('gulp');

gulp.task('default', function() {

  gulp.watch(['gulp.watch2.js', 'gulp.watch.js'], ['dep']);
});

gulp.task('dep', function() { // 这里要带回调必须在内部回调, 否则会一直挂起, 后续的watch一起不执行

  console.log(3);
});
