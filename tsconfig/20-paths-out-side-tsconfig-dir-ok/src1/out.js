define("src2/sub/ee", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = {
        ee: 'i am ee'
    };
});
define("src2/sub/dd", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports["default"] = {
        dd: 'i am dd'
    };
});
define("src2/sub/cc", ["require", "exports", "src2/sub/dd"], function (require, exports, dd_1) {
    "use strict";
    exports.__esModule = true;
    console.log(dd_1["default"]);
    exports["default"] = {
        cc: 'i am cc'
    };
});
define("src1/bb", ["require", "exports", "src2/sub/ee", "src2/sub/cc"], function (require, exports, ee_1, cc_1) {
    "use strict";
    exports.__esModule = true;
    function bb(foo) {
        console.log(ee_1["default"]);
        console.log(cc_1["default"]);
    }
    exports["default"] = bb;
});
define("src1/aa", ["require", "exports", "src1/bb"], function (require, exports, bb_1) {
    "use strict";
    exports.__esModule = true;
    function aa(foo) {
        console.log(foo);
        (0, bb_1["default"])('god');
    }
});
