let aa = { val: 'halo' }
let bb = { val: 1 }

log(aa, bb)

Object.assign(aa, bb)
log(aa, bb)
function log(...args) {
  console.log(args.map((vv) => JSON.stringify(vv)).join(', '))
}
