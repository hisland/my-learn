define("aa", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.halo = void 0;
    function halo(aa, bb) {
        return aa + bb;
    }
    exports.halo = halo;
});
define("bb", ["require", "exports", "aa"], function (require, exports, aa_1) {
    "use strict";
    exports.__esModule = true;
    exports.halo = void 0;
    function halo(aa, bb) {
        return aa_1.halo(aa, bb);
    }
    exports.halo = halo;
});
define("cc", ["require", "exports", "bb"], function (require, exports, bb_1) {
    "use strict";
    exports.__esModule = true;
    var bbq = bb_1.halo(1, 2);
    console.log(bbq);
});
