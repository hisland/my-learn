const gulp = require('gulp')
const { spawn } = require('child_process')

gulp.task('default', function() {
  const watcher = gulp.watch('**/*.rs')
  watcher.on('change', function(path, stats) {
    console.log(path, stats)
    spawn(`rustc`, ['-o', 'main-tmp', path], { stdio: 'inherit' })
    // .on(
    //   'exit',
    //   function(err, stdout, stderr) {
    //     console.log(err)
    //     console.log(stdout)
    //     console.log(stderr)
    //   }
    // )
  })
})
