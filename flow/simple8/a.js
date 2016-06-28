// @flow

// 可选参数 , 需要检查 a
function halo(a ? ) {
  if (a !== undefined) {
    return a();
  }
}

halo()


// 默认参数 , 不需要检查 a
function halo2(a = 1) {
  return a;
}

halo2()
