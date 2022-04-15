// 在当前目录执行 deno run -A z-deno-watch-run.js
// 再去修改 .rs 文件, 看输出结果

const __dirname = new URL('.', import.meta.url).pathname
console.log('__dirname: ', __dirname)

const outFile = `${__dirname}z-out/main-tmp`

const debounceRun = debounce(async (event) => {
  const {
    paths: [filePath],
  } = event

  if (filePath.endsWith('.rs')) {
    console.clear()
    console.log('filePath: ', filePath)

    const pp1 = Deno.run({
      cmd: `rustc -o ${outFile} ${filePath}`.split(' '),
    })
    const status = await pp1.status()
    console.log('\nrustc status: ', status)
    if (status.success) {
      const pp2 = Deno.run({
        cmd: `${outFile}`.split(' '),
      })
      const status = await pp2.status()
      console.log('\nrun status: ', status)
    }
  }
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

  const watcher = Deno.watchFs(__dirname)
  for await (const event of watcher) {
    debounceRun(event)
  }
})
