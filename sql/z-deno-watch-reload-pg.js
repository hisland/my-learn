// deno run -A z-deno-watch-reload.js

import * as Colors from 'https://deno.land/std@0.138.0/fmt/colors.ts'
import { dirname, basename, relative } from 'https://deno.land/std@0.138.0/path/mod.ts'

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
  // console.log('event: ', event)
  // console.log('kind: ', kind)
  // console.log('path: ', path)
  if (!["create", "modify"].includes(kind)) return
  if (!/\.sql/.test(path)) return

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

  console.log(`\n${Colors.red('[' + (COUNT++) + '] reload')} ${relative_file}: \n`)
  Deno.run({
    cmd: [
      `/Applications/Postgres.app/Contents/Versions/13/bin/psql`,
      `-p5432`,
      `-d`,
      `postgres`,
      `-f`,
      relative_file,
    ],
    env: {
      PGOPTIONS: '--search_path=learn_sql'
    }
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
