// this is the decorator factory
function color(value: string) {
  return function(target) {
    // this is the decorator
    // do something with 'target' and 'value'...
  }
}

// 可以使用 @color(red)
