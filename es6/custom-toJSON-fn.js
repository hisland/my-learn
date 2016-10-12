var a = {
  b: 1,
  toJSON: function() {
    return 'abc';
  }
}

console.log(JSON.stringify(a)); // 'abc'
