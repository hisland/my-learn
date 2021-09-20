System.register("bb", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("default", {
                god: 1
            });
        }
    };
});
System.register("aa", ["bb"], function (exports_2, context_2) {
    "use strict";
    var bb_1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (bb_1_1) {
                bb_1 = bb_1_1;
            }
        ],
        execute: function () {
            console.log(bb_1["default"]);
        }
    };
});
