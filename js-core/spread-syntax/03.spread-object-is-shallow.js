const parts = { aa: 'shoulders', cc: { sub: 'obj' } }
const lyrics = { bb: 'head', ...parts }

log(parts)
log(lyrics)

parts.cc.sub = 'new val'

log(parts)
log(lyrics)

function log(...args) {
  console.log(args.map((vv) => JSON.stringify(vv)).join(', '))
}
