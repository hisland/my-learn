let aa = {}
let bb = { val: 1, val2: 'halo' }

Object.assign(aa, bb)

log(aa, bb)
function log(...args) {
  console.log(args.map((vv) => JSON.stringify(vv)).join(', '))
}
