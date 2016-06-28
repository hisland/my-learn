// @flow

function halo(arr: Array<number>){
  var rs = 0;
  for (var i = 0; i < arr.length; i++) {
    rs += arr[i];
  }
  return rs;
}

halo([4, 'b']);


var rs: Array<number> = [];
rs.push(1)
rs.push(2)
rs.push('a')
