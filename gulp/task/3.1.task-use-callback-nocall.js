var gulp = require('gulp');

gulp.task('default', ['dep'], function(){
  console.log('default 默认会被执行');
});

gulp.task('dep', function(cb){
  setTimeout(function() {
    console.log('必须要有一个形参 cb, 用于执行表示当前任务完成, 形式是 cb(err)');
    // 没有调用cb, default不会执行
  }, 1000);
});
