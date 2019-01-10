function foo() {
  console.log('foo(): evaluated')
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('foo(): called')
  }
}

function goo() {
  console.log('goo(): evaluated')
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('goo(): called')
  }
}

class C {
  @foo()
  @goo()
  hey() {
    console.log('hey')
  }
}

let aa = new C()
aa.hey()
