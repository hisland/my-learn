const aa = ['this', 'is', 'an', 'many', 'words']
const [first, ...rest] = aa

log(aa)
log(first)
log(rest)

function log(...args) {
  console.log(args.map((vv) => JSON.stringify(vv)).join(', '))
}
