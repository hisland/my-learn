"use strict";
// 对应位置对应类型
// 不可越界
// 位置可设置为 undefined
exports.__esModule = true;
exports.preventVSCodeError = void 0;
{
    var aa = [2];
    console.log(aa);
    // aa[3] = undefined // Error: Tuple type '[number]' of length '1' has no element at index '3'
}
{
    var aa = [2, 'bb'];
    aa[1] = undefined;
    // aa[1] = 3 // Error: Type '3' is not assignable to type 'string'
    aa[1] = 'qq';
}
exports.preventVSCodeError = 1;
