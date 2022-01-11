console.clear()

{
  console.log('\n\n-------------')
  function aa() {
    try {
      console.log('01: 普通段正常')
      return 'normal return'
    } catch (ee) {
      console.log('01: 遇到错误:', ee)
      return 'error return'
    } finally {
      console.log('01: finally段 仍然执行')
      // return 'finally return'
    }
  }

  console.log('aa() 结果: ', aa())
}

{
  console.log('\n\n-------------')
  function aa() {
    try {
      console.log('02: 普通段错误')
      bb++
      return 'normal return'
    } catch (ee) {
      console.log('02: 遇到错误:', ee)
      return 'error return'
    } finally {
      console.log('02: finally段 仍然执行')
      // return 'finally return'
    }
  }

  console.log('aa() 结果: ', aa())
}

{
  console.log('\n\n-------------')
  function aa() {
    try {
      console.log('03: 普通段正常')
      return 'normal return' // 被忽略了
    } catch (ee) {
      console.log('03: 遇到错误:', ee)
      return 'error return' // 被忽略了
    } finally {
      console.log('03: finally段 仍然执行, 并且 return 覆盖 normal')
      return 'finally return' // 真正的 return
    }
  }

  console.log('aa() 结果: ', aa())
}

{
  console.log('\n\n-------------')
  function aa() {
    try {
      console.log('普通段错误')
      bb++
      return 'normal return'
    } catch (ee) {
      console.log('遇到错误:', ee)
      return 'error return'
    } finally {
      console.log('finally段 仍然执行, return 覆盖 error')
      return 'finally return'
    }
  }

  console.log('aa() 结果: ', aa())
}
