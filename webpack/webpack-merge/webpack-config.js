var merge = require('webpack-merge');

var aa = {
  entry: ['a'],
  module: {
    loaders: [{
      test: /.js/,
      loader: ['babel'],
    }]
  },
  aa: {
    bb: 33
  },
}
var bb = {
  entry: 'bb',
}
var cc = {
  entry: 'cc',
}

var util = require('util');

console.log(util.inspect(merge(bb, cc, function(a_value, b_value, out_obj, src_obj) {
  console.log('aha', arguments);
}), false, null));

console.log(bb, cc)
