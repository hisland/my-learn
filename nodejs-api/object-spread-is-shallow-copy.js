let aa = {
  bb: {
    cc: 1
  }
}

let bb = {
  ...aa
}

console.log(aa.bb === bb.bb)
