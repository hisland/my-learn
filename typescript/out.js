System.register("06.readonly-property", [], function (exports_1, context_1) {
    "use strict";
    var Octopus, dad;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Octopus = /** @class */ (function () {
                function Octopus(theName) {
                    this.numberOfLegs = 8; // 只读属性必须在声明时或构造函数里被初始化
                    this.name = theName; // 只读属性必须在声明时或构造函数里被初始化
                }
                return Octopus;
            }());
            exports_1("Octopus", Octopus);
            dad = new Octopus('Man with the 8 strong legs');
            dad.name = 'Man with the 3-piece suit'; // error! name is readonly.
        }
    };
});
