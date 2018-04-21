var gulp = require('gulp');

gulp.task('default', ['dep'], function(){
  console.log('default 默认会被执行');
});

gulp.task('dep', function(cb){
  var p = new Promise(function(resolve, reject){
    setTimeout(function() {
      resolve(33);
      console.log('resolve 完成');
    }, 1000);
  });
  return p;
});
