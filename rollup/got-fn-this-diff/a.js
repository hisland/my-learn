function a(val) {
  return 'a:' + val;
}

var b = function(val) {
  return 'b: ' + a(val);
}
var c = function(val) {
  return 'c: ' + a(val);
}

setTimeout(function() {
  b = function(val) {
    return 'b2: ' + a(val);
  }
  exports.c = c = function(val) {
    return 'c2: ' + a(val);
  };
}, 10);

export {
  b
};

exports.b2 = b;
exports.c = c;
