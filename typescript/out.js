var cc = function (start) {
    console.log(start);
    return '';
};
// 这2个即使没有, 也不会报错, 有点像 optional 属性
cc.interval = 3;
cc.reset = function () {
    console.log(this.interval);
};
cc(10);
cc.reset();
