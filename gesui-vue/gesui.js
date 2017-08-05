let app = new Vue({
  el: '#app',
  data: {
    config: {
      '税前工资': 4800,
      '使用统一基数': true,
      '使用基数比例': true,
      '统一基数比例': 70,
      '统一基数金额': 300,
      '免征额': 3500,
      '税后反推': 0,
    },
    names: ['养老', '医疗', '失业', '工伤', '生育', '大病补充', '公积金'],
    types: {
      '养老': {
        '基数金额': 300,
        '基数比例': 70,
        '使用基数比例': false,
        '个人税率': 8,
        '单位税率': 19,
      },
      '医疗': {
        '基数金额': 300,
        '基数比例': 70,
        '使用基数比例': false,
        '个人税率': 2,
        '单位税率': 6.5
      },
      '失业': {
        '基数金额': 300,
        '基数比例': 70,
        '使用基数比例': false,
        '个人税率': 0.4,
        '单位税率': 0.6
      },
      '工伤': {
        '基数金额': 300,
        '基数比例': 70,
        '使用基数比例': false,
        '个人税率': 0,
        '单位税率': 0.22
      },
      '生育': {
        '基数金额': 300,
        '基数比例': 70,
        '使用基数比例': false,
        '个人税率': 0,
        '单位税率': 0.5
      },
      '大病补充': {
        '基数金额': 300,
        '基数比例': 70,
        '使用基数比例': false,
        '个人税率': 0,
        '单位税率': 1
      },
      '公积金': {
        '基数金额': 300,
        '基数比例': 70,
        '使用基数比例': false,
        '个人税率': 12,
        '单位税率': 12
      }
    },
  },
  methods: {
    saveLocal(){
      let obj = {
        config: this.config,
        names: this.names,
        types: this.types,
      }
      store.set('old-gesui-config', obj)
    },
    getBaseFee(obj){
      if (this.config['使用统一基数']) {
        return this.config['统一基数金额']
      } else {
        return obj['基数金额']
      }
    },
    getFee(base, fee){
      return base * fee / 100
    },
    changeFeeRate(obj){
      obj['基数金额'] = this.config['税前工资'] * obj['基数比例'] / 100
    },
    changeFeeMoney(obj){
      obj['基数比例'] = (obj['基数金额'] / this.config['税前工资'] * 100).toFixed(2) - 0
    },
    changeUseCommon(){
      if (this.config['使用基数比例']) {
        this.config['统一基数金额'] = this.config['税前工资'] * this.config['统一基数比例'] / 100
      } else {
        this.config['统一基数比例'] = (this.config['统一基数金额'] / this.config['税前工资'] * 100).toFixed(2) - 0
      }
    },
    fanTui(value){
      let tmp = value - this.config['免征额'], feeRate, feeBase;

      // 根据反推表: http://www.taxspirit.com/calc/002.html
      if (tmp <= 0) {
        feeRate = 0, feeBase = 0;
      } else if (tmp <= 1455) {
        feeRate = 0.03, feeBase = 0;
      } else if (tmp <= 4155) {
        feeRate = 0.1, feeBase = 105;
      } else if (tmp <= 7755) {
        feeRate = 0.2, feeBase = 555;
      } else if (tmp <= 27255) {
        feeRate = 0.25, feeBase = 1005;
      } else if (tmp <= 41255) {
        feeRate = 0.3, feeBase = 2755;
      } else if (tmp <= 57505) {
        feeRate = 0.35, feeBase = 5505
      } else {
        feeRate = 0.45, feeBase = 13505
      }

      let rs1 = (value - this.config['免征额'] - feeBase) / (1 - feeRate) // 应交税部分, 比如6000-3500=2500, 2500即应交税部分
      let rs = rs1 + this.config['免征额'] // 这是扣税之前部分, 是扣了五险一金之后的部分

      console.log(value, tmp, feeRate, feeBase, rs1, rs);

      // 个人交的各种税率的和
      // let rate = 0;
      // for (let vv of this.names) {
      //   rate += this.types[vv]['个人税率'] - 0;
      // }
      // rate /= 100;

      // if (cfg['使用基数比例']) {
      //   cfg['税前工资'] = (rs / (1 - cfg['基数比例'] / 100 * rate)).toFixed(2);
      // } else {
      //   cfg['税前工资'] = (cfg['基数金额'] * rate + rs).toFixed(2);
      // }
      // console.log(cfg['税前工资']);
    },
    changeGlobal(){
      let vm = this
      if (this.config['使用统一基数']) {
        vm.changeUseCommon()
      } else {
        this.names.forEach(function(vv) {
          let obj = vm.types[vv]
          if (obj['使用基数比例']) {
            vm.changeFeeRate(obj)
          } else {
            vm.changeFeeMoney(obj)
          }
        })
      }
    },
    overridePerFeeUseCommon(){
      this.names.forEach(function(vv) {
        vm.types[vv]['基数金额'] = vm.config['统一基数金额']
        vm.types[vv]['基数比例'] = vm.config['统一基数比例']
      })
    },
  },
  computed: {
    '个人总缴纳比例' () {
      let total = 0, types = this.types;
      this.names.forEach(function(vv) {
        total += types[vv]['个人税率']
      })
      return total;
    },
    '单位总缴纳比例' () {
      let total = 0, types = this.types;
      this.names.forEach(function(vv) {
        total += types[vv]['单位税率']
      })
      return total;
    },
    '个人总缴纳' () {
      let total = 0, types = this.types, getFee = this.getFee, getBaseFee = this.getBaseFee;
      this.names.forEach(function(vv) {
        total += getFee(getBaseFee(types[vv]), types[vv]['个人税率'])
      })
      return total.toFixed(2);
    },
    '单位总缴纳' () {
      let total = 0, types = this.types, getFee = this.getFee, getBaseFee = this.getBaseFee;
      this.names.forEach(function(vv) {
        total += getFee(getBaseFee(types[vv]), types[vv]['单位税率'])
      })
      return total.toFixed(2);
    },
    '应纳税部分' () {
      return this.config['税前工资'] - this['个人总缴纳'] - this.config['免征额']
    },
    '个人所得税率' () {
      let myRest = this['应纳税部分']
      if (myRest <= 0) return 0
      if (myRest <= 1500) return 3
      if (myRest <= 4500) return 10
      if (myRest <= 9000) return 20
      if (myRest <= 35000) return 25
      if (myRest <= 55000) return 30
      if (myRest <= 80000) return 35
      return 45
    },
    '个人所得税' () {
      let myRest = this['应纳税部分']
      if (myRest <= 0) return 0
      if (myRest <= 1500) return myRest * 0.03 - 0
      if (myRest <= 4500) return myRest * 0.1 - 105
      if (myRest <= 9000) return myRest * 0.2 - 555
      if (myRest <= 35000) return myRest * 0.25 - 1005
      if (myRest <= 55000) return myRest * 0.3 - 2755
      if (myRest <= 80000) return myRest * 0.35 - 5505
      return myRest * 0.45 - 13505
    },
    '个人税后实得' () {
      return this.config['税前工资'] - this['个人总缴纳'] - this['个人所得税']
    },
    '单位总支出' () {
      return this.config['税前工资'] + parseFloat(this['单位总缴纳'])
    },
  },
  filters: {
    toFixed2(val){
      return parseFloat(val).toFixed(2)
    }
  },
  mounted(){
    let obj = store.get('old-gesui-config')
    if (obj) {
      this.config = obj.config
      this.names = obj.names
      this.types = obj.types
    }
    this.changeGlobal()
  },
})

window.onload = function() {
  let allNumberInput = document.querySelectorAll('input[type="number"]')
  allNumberInput.forEach(function(vv) {
    vv.addEventListener('input', function(e) {
      app.saveLocal()
    })
  })
}
