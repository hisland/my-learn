const aa = { this: 'is', an: 'key', yes: 'obj' }
const { yes, ...rest } = aa

log(aa)
log(yes)
log(rest)

function log(...args) {
  console.log(args.map((vv) => JSON.stringify(vv)).join(', '))
}
