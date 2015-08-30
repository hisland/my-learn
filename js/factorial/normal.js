// 递归方式
function factorial(n) {
  return (n <= 1) ? 1 : n * factorial(n - 1);
}


// 循环方式
function factorial2(n) {
  var sum = 1,
    i = 1;
  for (; i <= n; i++) {
    sum *= i;
  }
  return sum;
}



// test

function t(f, n) {
  console.time("time");
  console.log(f(n));
  console.timeEnd("time");
}


t(factorial, 20);
t(factorial2, 20);

// 这是js能算的最高的了, 再大就无限了
t(factorial, 170);
t(factorial2, 170);


