const gulp = require('gulp')
const { spawn } = require('child_process')

gulp.task('default', function() {
  const watcher1 = gulp.watch('**/*.rs')
  watcher1.on('change', function(path, stats) {
    console.log(' >>> build <<< : ', path, stats)
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

  const watcher2 = gulp.watch('./main-tmp')
  watcher2.on('change', function(path, stats) {
    console.log(' >>> run <<< : ', path, stats)
    spawn(`./main-tmp`, { stdio: 'inherit' })
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
