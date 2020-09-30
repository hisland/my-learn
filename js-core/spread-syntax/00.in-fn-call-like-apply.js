function aa(aa, bb, cc, dd) {
  console.log(aa, bb, cc, dd)
}

const arr = ['some', 'val', 33, 'god']

console.log('1: ')
aa(arr)
console.log('2: ')
aa(...arr)
console.log('3: ')
aa.apply(null, arr)
