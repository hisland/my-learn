
// 参考 http://www.yinhang.com/tools/Salary-calculator.html

var app = angular.module('app', []);
app.controller('model', ['$scope', '$timeout', function(s, timeout) {
  var cfg = s.config = {
    '税前工资': 8500,
    '基数比例': 70,
    '使用基数比例': true,
    '基数金额': 300,
  }
  s.$watch("config['税前工资']", function(v) {
    if (cfg['使用基数比例']) {
      cfg['基数金额'] = (v * cfg['基数比例'] / 100).toFixed(2);
    } else {
      cfg['基数比例'] = (cfg['基数金额'] / v * 100).toFixed(5).replace(/\.0*$/, ''); // 多几位,让运算舍入的误差不影响显示结果
    }
  });
  cycleWatch(s, {
    key: "config['基数比例']",
    fn: function(v) {
      // console.log('a', arguments);
      cfg['基数金额'] = (v * cfg['税前工资'] / 100).toFixed(2);
    }
  }, {
    key: "config['基数金额']",
    fn: function(v) {
      cfg['基数比例'] = (v / cfg['税前工资'] * 100).toFixed(5).replace(/\.0*$/, '');
      // console.log('b', arguments, cfg['基数比例']);
    }
  });

  // a, b 2个key循环依赖
  function cycleWatch(scope, a, b) {
    var isA, isB, handle;
    scope.$watch(a.key, function() {
      if (isB) {
        isB = false;
      } else {
        isA = true;
        a.fn.apply(this, arguments);
      }
      resetHandle();
    });
    scope.$watch(b.key, function() {
      if (isA) {
        isA = false;
      } else {
        isB = true;
        b.fn.apply(this, arguments);
      }
      resetHandle();
    });

    function resetHandle() { //50ms清除状态(一般来说够用了,人为操作不会有这么快), 避免值没有改变一直处于a或b状态内导致下一次变化不响应
      timeout.cancel(handle);
      handle = timeout(function() {
        isA = isB = false;
      }, 50);
    }
  }


  var names = ['养老', '医疗', '失业', '工伤', '生育', '公积金'];

  angular.extend(cfg, {
    '养老': {
      '个人税率': 8,
      '单位税率': 20
    },
    '医疗': {
      '个人税率': 2,
      '单位税率': 7.5
    },
    '失业': {
      '个人税率': 0.5,
      '单位税率': 1.5
    },
    '工伤': {
      '个人税率': 0,
      '单位税率': 0.6
    },
    '生育': {
      '个人税率': 0,
      '单位税率': 0.6
    },
    '公积金': {
      '个人税率': 12,
      '单位税率': 12
    }
  });

  for (var v of names) {
    cfg[v]['个人金额'] = function() {
      return (cfg['基数金额'] * this['个人税率'] / 100).toFixed(2);
    };
    cfg[v]['单位金额'] = function() {
      return (cfg['基数金额'] * this['单位税率'] / 100).toFixed(2);
    };
  }

  cfg['个人缴纳'] = function() {
    var total = 0;
    for (var v of names) {
      total += cfg[v]['个人金额']() - 0;
    }
    return total.toFixed(2);
  }
  cfg['单位缴纳'] = function() {
    var total = 0;
    for (var v of names) {
      total += cfg[v]['单位金额']() - 0;
    }
    return total.toFixed(2);
  }

  cfg['免征额'] = '3500.00';
  cfg['个人所得税'] = function() {
    var rs = cfg['税前工资'] - cfg['个人缴纳']() - cfg['免征额'];
    // 根据个税表: http://114.xixik.com/table-of-rates/
    if (rs <= 0) {
      rs = 0;
    } else if (rs <= 1500) {
      rs = rs * 0.03 - 0;
    } else if (rs <= 4500) {
      rs = rs * 0.1 - 105;
    } else if (rs <= 9000) {
      rs = rs * 0.2 - 555;
    } else if (rs <= 35000) {
      rs = rs * 0.25 - 1005;
    } else if (rs <= 55000) {
      rs = rs * 0.3 - 2755;
    } else if (rs <= 80000) {
      rs = rs * 0.35 - 5505;
    } else {
      rs = rs * 0.45 - 13505;
    }
    return rs.toFixed(2);
  }


  var handle;
  cfg['个人税后实得'] = 0;
  cycleWatch(s, {
    key: "config['个人所得税']()",
    fn: function(v) {
      var rs = cfg['税前工资'] - cfg['个人缴纳']() - cfg['个人所得税']();
      cfg['个人税后实得'] = rs.toFixed(2);
      cfg.aa = rs.toFixed(2);
    }
  }, {
    key: "config['个人税后实得']",
    fn: function(v) {
      timeout.cancel(handle);
      handle = timeout(function() {
        fantui(v);
      }, 1000); // 延迟1s反推, 避免输入过程不停变
    }
  });

  // var isJisuan = false; // 用于避免反推
  // cfg['个人税后实得'] = 0;
  // s.$watch("config['个人所得税']()", function() {
  //   var rs = cfg['税前工资'] - cfg['个人缴纳']() - cfg['个人所得税']();
  //   if (isFantui) {
  //     isFantui = false;
  //   } else {
  //     isJisuan = true;
  //     cfg['个人税后实得'] = rs.toFixed(2);
  //   }
  //   cfg.aa = rs.toFixed(2);
  //   console.log(cfg.aa);
  // });
  // // s.$watchGroup([
  // //   "config['税前工资']",
  // //   "config['税前工资']",
  // //   "config['税前工资']",
  // //   "config['税前工资']",
  // //   "config['税前工资']",
  // //   ], function(){
  // //   var rs = cfg['税前工资'] - cfg['个人缴纳']() - cfg['个人所得税']();
  // //   cfg['个人税后实得'] = rs;
  // //   console.log('3333', rs, cfg['个人税后实得']);
  // // })

  // var handle, isFantui = false; // 用于避免正向计算
  // s.$watch("config['个人税后实得']", function(v) {
  //   if (isJisuan) {
  //     isJisuan = false;
  //     return;
  //   }
  //   timeout.cancel(handle);
  //   handle = timeout(function() {
  //     isFantui = true;
  //     fantui(v);
  //   }, 1000);
  // });

  // 用实得工资v反推税前工资
  function fantui(v) {
    var tmp = v - cfg['免征额'],
      a, b;

    // 根据反推表: http://www.taxspirit.com/calc/002.html
    if (tmp <= 0) {
      a = 0, b = 0;
    } else if (tmp <= 1455) {
      a = 0.03, b = 0;
    } else if (tmp <= 4155) {
      a = 0.1, b = 105;
    } else if (tmp <= 7755) {
      a = 0.2, b = 555;
    } else if (tmp <= 27255) {
      a = 0.25, b = 1005;
    } else if (tmp <= 41255) {
      a = 0.3, b = 2755;
    } else if (tmp <= 57505) {
      a = 0.35, b = 5505
    } else {
      a = 0.45, b = 13505
    }

    var rs1 = (v - cfg['免征额'] - b) / (1 - a); // 应交税部分, 比如6000-3500=2500, 2500即应交税部分
    var rs = rs1 + (cfg['免征额'] - 0); // 这是扣税之前部分, 是扣了五险一金之后的部分

    // console.log(v, tmp, a, b, rs1, rs);

    // 个人交的各种税率的和
    var rate = 0;
    for (var v of names) {
      rate += cfg[v]['个人税率'] - 0;
    }
    rate /= 100;

    if (cfg['使用基数比例']) {
      cfg['税前工资'] = (rs / (1 - cfg['基数比例'] / 100 * rate)).toFixed(2);
    } else {
      cfg['税前工资'] = (cfg['基数金额'] * rate + rs).toFixed(2);
    }
    // console.log(cfg['税前工资']);
  }

  cfg['单位总支出'] = function() {
    var rs = (cfg['税前工资'] - 0) + (cfg['单位缴纳']() - 0);
    return rs.toFixed(2);
  }

}]);
