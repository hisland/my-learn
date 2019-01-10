function sealed(target) {
  console.log('what', target)
  // do something with 'target' ...
}

// 可以使用 @sealed

@sealed
class Hey {
  halo() {
    console.log(3)
  }
}
