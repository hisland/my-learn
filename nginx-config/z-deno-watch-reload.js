const __dirname = new URL('.', import.meta.url).pathname
const pp = `${__dirname}/tmp`

let count = 1

function doRun(isInit = false) {
  if (isInit) {
    Deno.run({
      cmd: `/usr/local/bin/nginx -p ${pp} -c ${pp}/nginx.conf -e ${pp}/../logs/error.log`.split(
        ' '
      ),
    })
  } else {
    Deno.run({
      cmd: `/usr/local/bin/nginx -p ${pp} -c ${pp}/nginx.conf -e ${pp}/../logs/error.log -s reload`.split(
        ' '
      ),
    })
  }
}

const run = debounce(() => {
  console.log(`${count++} reload`)
  doRun()
}, 100)

function debounce(func, wait, fireAtHead = false) {
  let timeout = null
  return (...args) => {
    const later = () => {
      timeout = null
      if (!fireAtHead) func(...args)
    }
    const needCall = fireAtHead && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (needCall) func(...args)
  }
}

globalThis.addEventListener('load', async function () {
  console.log('load')

  doRun(true)

  const watcher = Deno.watchFs('tmp/nginx.conf')
  for await (const event of watcher) {
    run()
  }
})

Deno.addSignalListener('SIGINT', () => {
  Deno.run({
    cmd: `/usr/local/bin/nginx -s quit`.split(' '),
  })
  Deno.exit()
})
