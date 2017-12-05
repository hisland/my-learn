// very slow
function fibonacci(n) {
  return (n <= 2) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}


var fibArr = [undefined, 1, 1];

function fibonacciCached(n) {
  var nFib = fibArr[n];
  return nFib ? nFib : (fibArr[n] = fibonacciCached(n - 1) + fibonacciCached(n - 2));
}

// very fast
function fibonacciFor(n) {
  var x = 1,
    y = 1,
    i = 2,
    t;
  while (i < n) {
    t = y;
    y = x + y;
    x = t;
    i++;
  }
  return y;
}



// test
function t(f, n) {
  console.time("time");
  console.log(f(n));
  console.timeEnd("time");
}



t(fibonacci, 25);
t(fibonacciCached, 25);
t(fibonacciFor, 25);

console.log('----------------');
t(fibonacci, 35);
t(fibonacciCached, 35);
t(fibonacciFor, 35);

console.log('----------------');
t(fibonacci, 40);
t(fibonacciCached, 40);
t(fibonacciFor, 40);


console.log('----------------so quick||');
t(fibonacciFor, 100);
