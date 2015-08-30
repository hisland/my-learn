// list 全排列， 每个排列回调一次
function fullPermutation(list) {
  function* into(target, rest, tempTarget, tempRest, i, max) {
    if (rest.length == 1) {
      target.push(rest[0]);
      yield target;
    } else {
      for (i = 0, max = rest.length; i < max; i++) {
        tempTarget = target.slice();
        tempTarget.push(rest[i]);
        tempRest = rest.slice();
        tempRest.splice(i, 1);
        into(tempTarget, tempRest);
      }
    }
  }
  return into([], list);
}



var it = fullPermutation([1, 2, 3]);
console.log(it);
console.log(it.next());
for(var v of it){
  console.log(33, v);
}

console.time('a');
for(var v of fullPermutation([3,4,5,6,7,8,9])){
  var b1 = list[0] + list[1] + list[2] + list[3];
  var b2 = list[1] + list[3] + list[4] + list[5];
  var b3 = list[2] + list[3] + list[5] + list[6];
  if (b1 == 23 && b2 == 23 && b3 == 23) {
    console.log(list);
  }
}
console.timeEnd('a');
