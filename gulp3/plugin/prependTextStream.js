var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

const PLUGIN_NAME = 'gulp-prependText';

function prefix(text) {
  var stream = through();
  stream.write(text);
  return stream;
}

module.exports = function(text) {
  if (!text) {
    throw new PluginError(PLUGIN_NAME, 'Missing prefix text!');
  }

  text = new Buffer(text);

  var stream = through.obj(function(file, enc, cb) {
    if (file.isBuffer()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Buffer are not supported!'));
      return cb();
    }

    if (file.isStream()) {
      var streamer = prefix(text);
      streamer.on('error', this.emit.bind(this, 'error'));
      file.contents = file.contents.pipe(streamer);
    }

    this.push(file);

    cb();
  });

  return stream;
}
