const parts = ['shoulders', { sub: 'obj' }]
const lyrics = ['head', ...parts]

log(parts)
log(lyrics)

parts[1].sub = 'new val'

log(parts)
log(lyrics)

function log(...args) {
  console.log(args.map((vv) => JSON.stringify(vv)).join(', '))
}
