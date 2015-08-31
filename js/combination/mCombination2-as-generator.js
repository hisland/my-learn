// 从list里面任意选取m个的所有组合
// 暴力破解, 拼凑数组索引(从实际结果观察倒推)
function* mCombination(list, m) {
  var base = [],
    max = list.length,
    diff = max - m,
    end = m - 1,
    x;
  for (x = 0; x < m; x++) {
    base[x] = x;
  }
  yield get(base);
  while (base[0] < diff) {
    while (base[end] < end + diff) {
      base[end] += 1;
      yield get(base);
    }
    x = end;
    while (x > 0 && base[x] == x + diff) {
      base[x - 1] += 1;
      for (; x < m; x++) {
        base[x] = base[x - 1] + 1;
      }
      x--;
      yield get(base);
      while (base[x] == x + diff && base[x - 1] == x - 1 + diff) {
        x -= 1;
      }
    }
  }

  function get(base) {
    var rs = [],
      i = 0;
    for (; i < m; i++) {
      rs[i] = list[base[i]];
    }
    return rs;
  }
}

// 用生成器来遍历
var k = mCombination([1,2,3,4], 3);
for(var i of k){
  console.log(i);
}
