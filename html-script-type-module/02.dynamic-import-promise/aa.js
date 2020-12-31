console.log('aa 1')

if (2 < 3) {
  import('./bb.js').then(function (rs) {
    console.log(rs)
    console.log(rs.default)
    console.log(rs.bb2)
  })
}

console.log('aa 2')
