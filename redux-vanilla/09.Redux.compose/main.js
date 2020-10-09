// 这是 compose 的实现
function compose() {
  for (
    var _len = arguments.length, funcs = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    funcs[_key] = arguments[_key]
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg
    }
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments))
    }
  })
}
{
  const aa = compose(
    function (val) {
      console.log(1, val)
      return '1'
    },
    function (val) {
      console.log(2, val)
      return '2'
    },
    function (val) {
      console.log(3, val)
      return '3'
    }
  )
  console.log(aa.toString())
  console.log('rs: ', aa('init'))
}
