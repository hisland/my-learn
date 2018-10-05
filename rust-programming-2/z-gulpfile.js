const gulp = require('gulp')
const { spawn } = require('child_process')

const outFile = './z-out/main-tmp'

gulp.task('default', function() {
  const watcher1 = gulp.watch('**/*.rs')
  watcher1.on('change', function(path, stats) {
    console.log(' >>> build <<< : ', path, stats)
    spawn(`rustc`, ['-o', outFile, path], { stdio: 'inherit' })
    // .on(
    //   'exit',
    //   function(err, stdout, stderr) {
    //     console.log(err)
    //     console.log(stdout)
    //     console.log(stderr)
    //   }
    // )
  })

  const watcher2 = gulp.watch(outFile)
  watcher2.on('change', function(path, stats) {
    console.log(' >>> run <<< : ', path, stats)
    spawn(outFile, { stdio: 'inherit' })
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
