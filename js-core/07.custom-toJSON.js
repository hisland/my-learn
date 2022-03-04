const aa = {
  b: 1,
  toJSON: function () {
    return 'abc'
  },
}

console.log(JSON.stringify(aa)) // 'abc'
