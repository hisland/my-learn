// deno run -A z-deno-watch-reload.js

import * as Colors from 'https://deno.land/std@0.138.0/fmt/colors.ts'
import { dirname, basename, relative } from 'https://deno.land/std@0.138.0/path/mod.ts'

const __filepath = new URL('', import.meta.url).pathname
// console.log('__filepath: ', __filepath)
const __filename = basename(__filepath)
// console.log('__filename: ', __filename)
const __dirname = dirname(__filepath)
// console.log('__dirname: ', __dirname)

const outFile = `${__dirname}/z-out/main-tmp`

// Deno.exit()

let COUNT = 1

const debounceRun = debounce(async (event) => {
  const {
    kind,
    paths: [path],
  } = event
  // console.log('event: ', event)
  // console.log('kind: ', kind)
  // console.log('path: ', path)
  if (!["create", "modify"].includes(kind)) return
  if (!/\.rs/.test(path)) return

  const filename = basename(path)
  // console.log('filename: ', filename)
  const relative_file = relative(__dirname, path)
  // console.log('relative_file: ', relative_file)
  try {
    Deno.lstatSync(relative_file);
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return false;
    }
  }

  console.clear()
  console.log(`\n${Colors.red('[' + (COUNT++) + '] reload')} ${relative_file}: \n`)

  const pp1 = Deno.run({
    cmd: [
      'rustc',
      '-o',
      outFile,
      relative_file,
    ],
  })
  const status = await pp1.status()
  console.log(`\n${Colors.cyan('[rustc status]')}`, status, '\n')
  if (status.success) {
    const pp2 = Deno.run({
      cmd: [outFile],
    })
    const status = await pp2.status()
    console.log(`\n\n${Colors.green('[run status]')}`, status)
  }
}, 100)


globalThis.addEventListener('load', async function () {
  console.log('start')
  const watcher = Deno.watchFs('.')
  for await (const event of watcher) {
    debounceRun(event)
  }
})

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
