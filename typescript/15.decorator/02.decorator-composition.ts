function foo(target) {
  console.log('foo', target)
}
function goo(target) {
  console.log('goo', target)
}

// single line
@foo @goo class Hey1 {
  halo() {
    console.log(3)
  }
}

// multi line
@foo
@goo
class Hey2 {
  halo() {
    console.log(3)
  }
}
