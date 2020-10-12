const aa = { sub: [1, 2, 3] }
const bb = { sub: [3] }

log(aa, bb)

Object.assign(aa, bb)

log(aa, bb)
function log(...args) {
  console.log(args.map((vv) => JSON.stringify(vv)).join(', '))
}
