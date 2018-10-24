function halo1(aa, bb) {
    return aa + bb;
}
/// <reference path="aa.ts" />
function halo2(aa, bb) {
    return halo1(aa, bb);
}
/// <reference path="aa.ts" />
/// <reference path="bb.ts" />
var bbq = halo2(1, 2);
console.log(bbq);
