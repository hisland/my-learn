var gulp = require('gulp');

gulp.task('default', ['dep'], function(){
  console.log('default 默认会被执行');
});

gulp.task('dep', function(){
  console.log('我被 default 依赖执行的');
});
