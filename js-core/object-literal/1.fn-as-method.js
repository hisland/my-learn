// 函数直接作为方法

function aa() {
  console.log('aa')
}

const b = {
  aa,
}

b.aa()
