exports.v = VERSION;

console.log(TWO);

if (SOME) {
  console.log(444);
}

console.log(process.env.NODE_ENV);

function someFn(){
  console.log(TWO);
  if (SOME) {
    var a = 'i will be delete, in a funciton'
    return a;
  }
}

someFn()
