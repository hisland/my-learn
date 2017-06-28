/*

* 通常放在 entry 的最前端, 这样就能正确加载资源了
* 注意末尾的 /
* 被转换成 __webpack_require__.p = 'change/on/the/fly'
* 结果是完全动态的, 打开 dist/main.js 查看打包结果的内容
* 效果像是用了 DefinePlugin

*/

let some_path = 'dir/not/exist/'
__webpack_public_path__ = some_path // 地址是错误的, 所以无法自动加载 vendor.0.js


require.ensure(['./bb'], function(){
  var bb = require('./bb');

  console.log('in a: bb: ', bb);
}, 'vendor');
