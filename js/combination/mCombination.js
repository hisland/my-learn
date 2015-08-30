// 从list里面任意选取m个的所有组合
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




console.log(mCombination(['a', 'b', 'c', 'd'], 4));
