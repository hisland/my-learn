'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import cfg from './webpack.config.js';
import cfghot from './webpack.config.hot.js';

// gulp.task('default', function(callback) {
//   // Start a webpack-dev-server

//   var compiler = webpack(cfghot);
//   new WebpackDevServer(compiler, {
//     hot: true,
//     inline: true
//     // server and middleware options
//   }).listen(8201, "localhost", function(err) {
//     if (err) throw new gutil.PluginError("webpack-dev-server", err);
//     // Server listening
//     gutil.log("[webpack-dev-server]", "http://localhost:8201/webpack-dev-server/index.html");

//     // keep the server alive or continue?
//     // callback();
//   });
// });

gulp.task('default', function(callback) {

  cfg.watch = true;
  webpack(cfg, function(err, stats){
    
  });

  var compiler = webpack(cfg);
  new WebpackDevServer(compiler, {
    inline: true
    // server and middleware options
  }).listen(8201, "localhost", function(err) {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8201/webpack-dev-server/index.html");

    // keep the server alive or continue?
    // callback();
  });
});


// gulp.task("default", function(callback) {
//   // run webpack
//   cfg.watch = true;
//   webpack(cfg, function(err, stats) {
//     if (err) throw new gutil.PluginError("webpack", err);
//     gutil.log("[webpack]", stats.toString({
//       // output options
//     }));
//     // callback();
//   });
// });
