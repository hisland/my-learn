console.clear()

{
  function run() {
    try {
      console.log('in try 1')
      return 'return try'
      console.log('in try 2')
    } finally {
      console.log('in finally 始终执行')
    }
  }

  console.log()
  console.log(1, run())
}

{
  function run() {
    try {
      console.log('in try 1')
      return 'return try'
      console.log('in try 2')
    } finally {
      console.log('in finally 始终执行')
      return 'return finally 覆盖 try 里的 return'
    }
  }

  console.log()
  console.log(2, run())
}
