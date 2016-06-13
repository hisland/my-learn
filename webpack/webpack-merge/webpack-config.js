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
  entry: 'q',
}
var cc = {
  entry: 'q',
}

var util = require('util');

console.log(util.inspect(merge(bb, cc, function() {
  console.log('aha');
}), false, null));
