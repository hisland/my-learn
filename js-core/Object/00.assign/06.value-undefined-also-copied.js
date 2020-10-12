let aa = { val: { sub: 'hey' } }
let bb = { val: undefined }

Object.assign(aa, bb)

log(aa, bb)

function log(...args) {
  console.log(args.map((vv) => JSON.stringify(vv)).join(', '))
}
