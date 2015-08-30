// list中选取m个排列， 每个排列回调一次
function mPermutation(list, m, fn) {
  (function into(target, rest, idx, tempTarget, tempRest, i, max) {
    if (idx < m) {
      //任意选取一个
      for (i = 0, max = rest.length; i < max; i++) {
        tempTarget = target.slice();
        tempTarget.push(rest[i]);
        tempRest = rest.slice();
        tempRest.splice(i, 1);
        //剩下的递归
        into(tempTarget, tempRest, idx + 1);
      }
    } else {
      fn(target);
    }
  })([], list, 0);
}



// test

mPermutation([1, 2, 3, 4], 2, function(list) {
  console.log(33, list);
})
