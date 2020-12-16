{
  console.log('\n\n-------------')
  function aa() {
    try {
      console.log('普通段正常')
      return 'normal return'
    } catch (ee) {
      console.log('遇到错误:', ee)
      return 'error return'
    } finally {
      console.log('finally段 无返回值')
      // return 'finally return'
    }
  }

  console.log('aa() 结果: ', aa())
}

{
  console.log('\n\n-------------')
  function aa() {
    try {
      console.log('普通段正常')
      return 'normal return'
    } catch (ee) {
      console.log('遇到错误:', ee)
      return 'error return'
    } finally {
      console.log('finally return 覆盖 normal')
      return 'finally return'
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
      console.log('finally段')
      // return 'finally return'
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
      console.log('finally return 覆盖 error')
      return 'finally return'
    }
  }

  console.log('aa() 结果: ', aa())
}
