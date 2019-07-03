const chokidar = require('chokidar')
const { exec } = require('child_process')

chokidar.watch(['.*', '*.js']).on('change', path => {
  console.log(path)
  exec(`rm -rf out; babel -d out ${path}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
  })
})
