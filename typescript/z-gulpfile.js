const gulp = require('gulp')
const { spawn } = require('child_process')

const outFile = 'out.js'

gulp.task('default', function() {
  const watcher1 = gulp.watch('**/*.ts')
  watcher1.on('change', function(path, stats) {
    console.log(' >>> build <<< : ', path, stats)
    spawn(
      `tsc`,
      [
        // '-w', // no watch here
        '--outFile',
        outFile,
        '--experimentalDecorators',
        '-t',
        'ES2015',
        path,
      ],
      { stdio: 'inherit' }
    ).on('exit', function(err, stdout, stderr) {
      if (!err) {
        spawn('node', [outFile], { stdio: 'inherit' })
      }
    })
  })
})
