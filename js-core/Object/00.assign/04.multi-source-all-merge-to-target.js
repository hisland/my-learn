let aa = { val: { sub: 'hey' } }
let bb = { val: 1 }
let cc = { bbq: 'cc' }

Object.assign(aa, bb, cc)

log(aa, bb, cc)

function log(...args) {
  console.log(args.map((vv) => JSON.stringify(vv)).join(', '))
}
