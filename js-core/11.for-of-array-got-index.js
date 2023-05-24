let list = ['god', 'say', 4, 'is', true]
for (let [index, value] of list.entries()) {
  console.log(index, value)
}

// 通过 list.entries() 能用简单的 for-of 做循环, 而不用 list.forEach 函数
