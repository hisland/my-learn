// 全部执行完毕, then 得到数组

var promise = Promise.resolve(3);
Promise.all([true, promise])
  .then(values => {
    console.log(values); // [true, 3]
  });
