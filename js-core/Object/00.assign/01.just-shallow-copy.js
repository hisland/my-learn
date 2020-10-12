let aa = {}
let bb = { val: 1, val2: { sub: 2 } }

Object.assign(aa, bb)

log(aa, bb)

bb.val2.sub = 3
// aa.val2.sub // is 3 now

log(aa, bb)
function log(...args) {
  console.log(args.map((vv) => JSON.stringify(vv)).join(', '))
}
