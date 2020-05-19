const reg = /some/g

const str = 'some and some'

console.log(str.match(reg))

for (const vv of str.matchAll(reg)) {
  console.log(vv)
}
