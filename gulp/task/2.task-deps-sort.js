var gulp = require('gulp');

gulp.task('default', ['dep1', 'dep2'], function(){
  console.log('default 默认会被执行');
  console.log('deps是根据相互依赖关系最终的顺序执行的');
});

gulp.task('dep1', ['dep2'], function(){
  console.log('dep1: 我被 default 依赖执行的');
});

gulp.task('dep2', function(){
  console.log('dep2: 我被 default 依赖执行的');
});
