'use strict'

console.log('try 块里面遇到 错误会跳到 catch块里面执行')
try {
  console.log('in try')
  var a = 3
  a++
  console.log('try 完毕, catch不会执行')
} catch (e) {
  console.log('没有错误不会执行', e)
} finally {
  console.log('in finally, 不管有没有错误都会执行')
}

console.log('\n\n-------------')
try {
  console.log('in try')
  ll++ //错误行
  console.log('这已经不会执行')
} catch (e) {
  console.log('遇到错误', e)
} finally {
  console.log('in finally, 始终会执行')
}

console.log(
  '\n\n------------- finally 段是可选的, 通常用来避免代码出现问题, 做一些资源释放等事情'
)
try {
  console.log('in try')
  console.log('try 完毕, catch不会执行')
} catch (e) {
  console.log('遇到错误', e)
}

console.log('\n\n------------- try return 了')
function aa() {
  try {
    console.log('下面一行返回值了')
    return '横断山脉' // 没有错误这里已经返回了, 后续就不再执行
  } catch (e) {
    console.log('遇到错误', e)
  } finally {
    console.log('返回了也要执行 finally')
  }

  // 后面的不会再执行了, 哪怕后面还有 finally 块
  try {
    console.log('下面一行返回值了')
    return '横断山脉'
  } catch (e) {
    console.log('遇到错误', e)
  } finally {
    console.log('返回了也要执行 finally')
  }
}
console.log('调用aa(): ', aa())
