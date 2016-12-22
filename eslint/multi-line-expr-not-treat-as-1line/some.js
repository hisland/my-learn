// 多行表达式, eslint 并不会认为一行, 按常规理解(一行就是一行)执行

// eslint-disable-next-line no-undef
console.log(

  some(3), // eslint-disable-line no-console

  4);

// eslint-disable-next-line no-console
console.log(

  some(3), // eslint-disable-line no-undef

  4);
