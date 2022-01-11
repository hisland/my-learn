console.clear()

function run() {
  try {
    console.log('in try 1')
    return
    console.log('in try 2')
  } catch (error) {
    console.log('in catch')
  } finally {
    console.log('in finally')
  }
}

run()
