// this is the decorator factory
function color(value: string) {
  console.log('param:', value)
  return function(target) {
    console.log('decorator: ', target)
    // this is the decorator
    // do something with 'target' and 'value'...
  }
}

// 可以使用 @color(red)

@color('red')
class Hey {
  halo() {
    console.log(3)
  }
}

export const preventVSCodeError = 1
