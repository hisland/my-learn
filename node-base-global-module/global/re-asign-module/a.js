// 这样会丢失 此模块的定义, require的地方使用的是 node 内建的 module对象
module = {
  abc: 123,
  exports:{
    halo: 'abc'
  }
}

