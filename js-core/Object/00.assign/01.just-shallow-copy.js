let aa = {}
let bb = { val: 1, val2: { sub: 2 } }

Object.assign(aa, bb)

console.log(aa, bb)

bb.val2.sub = 3

console.log(aa, bb)
