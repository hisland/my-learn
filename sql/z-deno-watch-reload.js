// deno run -A z-deno-watch-reload.js

import { dirname, basename } from 'https://deno.land/std@0.119.0/path/mod.ts'

const __filepath = new URL('', import.meta.url).pathname
// console.log('__filepath: ', __filepath)
const __filename = basename(__filepath)
// console.log('__filename: ', __filename)
const __dirname = dirname(__filepath)
// console.log('__dirname: ', __dirname)

let COUNT = 1

const run = debounce((event) => {
  const {
    kind,
    paths: [path],
  } = event
  // console.log('kind: ', kind)
  // console.log('path: ', path)
  if (!/\.sql/.test(path)) return

  const filename = basename(path)
  // console.log('filename: ', filename)

  console.log(`\n${COUNT++} reload ${filename}: `)
  Deno.run({
    cmd: [
      `sqlite3`, // run sqlite3
      `halo.db`,
      `.read ${filename}`,
    ],
  })
}, 100)

console.log('start')
const watcher = Deno.watchFs('.')
for await (const event of watcher) {
  run(event)
}

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
