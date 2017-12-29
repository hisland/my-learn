// 从list里面任意选取m个的所有组合, 网上找的, 递归方式, 效率不如2
function mCombination(list, m, result) {

  var result = result ? result : [];
  var listClone = list.slice(0);
  var items = listClone.shift();
  items = items.constructor === Array ? items : [items];

  (function func(tt, ll) {
    var itemClone;
    var listClone2 = ll.slice(0);
    var margin = m - tt.length;

    if (margin == 0) {
      result.push(tt);
    }else if (margin == 1) {
      for (var j in ll) {
        itemClone = tt.slice(0);
        itemClone.push(ll[j]);
        result.push(itemClone);
      }
    }else if (margin > 1) {
      itemClone = tt.slice(0);
      itemClone.push(listClone2.shift());
      func(itemClone, listClone2);

      if (tt.length + listClone2.length >= m) {
        func(tt, listClone2);
      }
    }
  })(items, listClone);

  if (listClone.length >= m) {
    return mCombination(listClone, m, result);
  } else {
    return result;
  }
}


// test
function t(f, a, b) {
  console.time("time");
  f(a, b);
  console.timeEnd("time");
}
t(mCombination, [0, 1, 2, 3, 4, 5,0, 1, 2, 3, 4, 5,0, 1, 2, 3, 4, 5,0, 1, 2, 3, 4, 5], 14)

