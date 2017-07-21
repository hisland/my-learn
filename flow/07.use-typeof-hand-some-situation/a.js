// @flow

// 内部使用了 typeof 针对不同类型操作, 没有报错

function halo(a) {
  if (typeof a === 'string') {
    return a.length;
  } else {
    return a;
  }
}

var rs = halo('some') + halo(4);
console.log(rs);
