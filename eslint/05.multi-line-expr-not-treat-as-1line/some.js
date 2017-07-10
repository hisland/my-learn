// 多行表达式, eslint 并不会认为一行, 按常规理解(一行就是一行)执行

// eslint-disable-next-line no-console
console.log(

  some(3),
  console.log('qq'), // 这行报错

  4);
