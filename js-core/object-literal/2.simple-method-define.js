// 方法简写

const o = {
  method() {
    return 'Hello!'
  },
}

// 等同于

const o = {
  method: function() {
    return 'Hello!'
  },
}

console.log(o.method())
