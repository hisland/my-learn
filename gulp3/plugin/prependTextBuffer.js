var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-prependText';

module.exports = function(text) {
  if (!text) {
    throw new PluginError(PLUGIN_NAME, 'Missing prefix text!');
  }

  text = new Buffer(text);

  var stream = through.obj(function(file, enc, cb) {
    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Stream are not supported!'));
      return cb();
    }

    if (file.isBuffer()) {
      file.contents = Buffer.concat([text, file.contents]);
    }

    this.push(file);

    cb();
  });

  return stream;
}
