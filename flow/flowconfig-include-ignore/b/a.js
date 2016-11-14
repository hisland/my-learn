// @flow
// 被 ignore 了

function halo(a) {
  return a.length;
}

var rs = halo('some') + halo(4);
console.log(rs);
