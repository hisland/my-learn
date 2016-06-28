// @flow

function halo(a) {
  if (typeof a === 'string') {
    return a.length;
  } else {
    return a;
  }
}

var rs = halo('some') + halo(4);
console.log(rs);
