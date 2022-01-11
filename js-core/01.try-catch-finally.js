'use strict'
console.clear()

console.log('01: try 块里面遇到 错误会跳到 catch块里面执行')
try {
  console.log('01: in try')
  let aa = 3
  aa++
  console.log('01: try 完毕, catch不会执行')
} catch (ee) {
  console.log('01: 没有错误不会执行', ee)
} finally {
  console.log('01: in finally, 不管有没有错误都会执行')
}

console.log('\n\n-------------')
try {
  console.log('02: in try')
  ll++ //错误行
  console.log('02: 这已经不会执行')
} catch (ee) {
  console.log('02: 遇到错误', ee)
} finally {
  console.log('02: in finally, 始终会执行')
}

console.log(
  '\n\n------------- finally 段是可选的, 通常用来避免代码出现问题, 做一些资源释放等事情'
)
try {
  console.log('03: in try')
  console.log('03: try 完毕, catch不会执行')
} catch (ee) {
  console.log('03: 遇到错误', ee)
}

console.log('\n\n------------- try return 了')
function aa() {
  try {
    console.log('04: 下面一行返回值了')
    return '横断山脉' // 没有错误这里已经返回了, 后续就不再执行
  } catch (ee) {
    console.log('04: 遇到错误', ee)
  } finally {
    console.log('04: 返回了也要执行 finally')
  }

  // 后面的不会再执行了, 哪怕后面还有 finally 块
  try {
    console.log('05: 下面一行返回值了')
    return '横断山脉'
  } catch (ee) {
    console.log('05: 遇到错误', ee)
  } finally {
    console.log('05: 返回了也要执行 finally')
  }
}
console.log('调用aa(): ', aa())
