var gulp = require('gulp');

gulp.task('default', function() {

  console.log('监听文件/文件夹的 添加, 修改, 删除, **之后的');
  console.log('反正比较绕, 用的时候具体看');

  gulp.watch('../**/*.js', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});
