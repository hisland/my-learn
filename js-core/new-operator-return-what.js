function test() {
  let kk = {
    aa: 1,
  }
  this.god = 'cc'
  console.log('test-this-is: ', this)
  return kk
}

let aa = test()
let bb = new test()

console.log('test返回了值,此时new操作相当于普通函数调用!')
console.log(aa)
console.log(bb)

function test2() {
  let kk = {
    aa: 1,
  }
  this.god = 'cc'
}

let aa = test2()
let bb = new test2()

console.log('\n\ntest2没有返回值,此时new生成新的对象,并且类型是test2')
console.log(aa)
console.log(bb)
console.log('aa instanceof test2', aa instanceof test2)
console.log('bb instanceof test2', bb instanceof test2)

function aa() {
  this.god = 1
  return 3
  this.bb = 2 // 此行被忽略了
}

let bb = new aa()
console.log(bb) // aa { god: 1 } new 函数里面 return 原始值, 还是new生成的新对象是返回值

function aa2() {
  this.god = 1
  return { some: 1 }
  this.bb = 2 // 此行被忽略了
}

let bb = new aa2()
console.log(bb) // { some: 1 } new 函数里面 return 对象, 此对象作为返回值
