// 只是改变了变量 exports 的指向, 不再与 module.exports 指向同一对象
exports = {
  abc: 123,
}

// 正确姿势
module.exports = {
  def: 456
}
