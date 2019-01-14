const aa1 = import('./sub1/sub1.js')
console.log(aa1)
aa1.then(function(rs) {
  console.log(rs)
  console.log(rs.default)
})
