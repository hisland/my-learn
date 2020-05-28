{
  //var 的作用域是 以函数为单位的

  // 这里全部输出 10
  for (var ii = 0; ii < 10; ii++) {
    setTimeout(function () {
      console.log(ii)
    }, 100 * ii)
  }

  //要用这种函数产生闭包才能达到想要的效果, var 是古董了,不要再用了 使用 let, const
  for (var jj = 0; jj < 10; jj++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    ;(function (jj) {
      setTimeout(function () {
        console.log(jj)
      }, 100 * jj)
    })(jj)
  }
}

export const preventVSCodeError = 1
