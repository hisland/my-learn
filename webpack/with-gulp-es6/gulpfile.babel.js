'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import cfg from './webpack.config.js';

gulp.task('default', function(callback) {
  // Start a webpack-dev-server
  var compiler = webpack(cfg);

  new WebpackDevServer(compiler, {
    // server and middleware options
  }).listen(8201, "localhost", function(err) {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8201/webpack-dev-server/index.html");

    // keep the server alive or continue?
    // callback();
  });
});
