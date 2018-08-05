const cluster = require('cluster')
const gulp = require('gulp')
const argv = require('yargs').argv // for args parsing
const spawn = require('child_process').spawn

function initDefaultTaskThings() {
  gulp.src('src/aa.js').pipe(gulp.dest('z-out5'))
}

gulp.task('default', function(topDone) {
  if (cluster.isMaster) {
    console.log('master start: ')
    forkOne()
    function forkOne() {
      const worker = cluster.fork()
      worker.on('exit', (code, signal) => {
        forkOne()
      })
    }
  } else {
    initDefaultTaskThings()
    const watchFile = argv.f || argv.gulpfile || 'gulpfile.js'
    console.log(`worker start: \n\n\n`)
    gulp.watch(watchFile, function watchGulpfile(watchDone) {
      console.log(`\n\n\n${watchFile} changed`)
      watchDone()
      topDone()
      process.exit()
    })
  }
})
