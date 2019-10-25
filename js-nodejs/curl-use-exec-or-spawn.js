const { exec, spawn } = require('child_process')

exec(`curl baidu.com`, (error, stdout, stderr) => {
  if (error) {
    console.log(`curl error`)
  } else {
    console.log(1, stdout)
  }
})

const ss = spawn(`curl`, ['baidu.com'])
ss.stdout.on('data', data => {
  console.log(2, data + '')
})
ss.stderr.on('data', data => {
  console.log(`2 curl error`, data + '')
})
ss.on('close', code => {
  console.log(`2 curl done`, code + '')
})
