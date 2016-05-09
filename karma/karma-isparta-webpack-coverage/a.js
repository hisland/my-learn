function a(v) {
  if (v > 10) {
    return 9;
  } else {
    return 8;
  }
}

function b() {
  console.log(4);
}


module.exports = {
  a: a,
  b: b
}
