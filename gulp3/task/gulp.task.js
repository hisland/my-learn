var gulp = require('gulp');

gulp.task('default', ['dep'], function(){
  console.log('default 默认会被执行');
});

gulp.task('dep', function(){
  var p = new Promise(function(s, r){
    setTimeout(function() {
      console.log(arguments);
      arguments[0]();
    }, 1000);
  });
});

gulp.task-default.js
gulp.task-deps.js
gulp.task-use-callback.js
gulp.task-return-stream.js
gulp.task-return-promise.js
