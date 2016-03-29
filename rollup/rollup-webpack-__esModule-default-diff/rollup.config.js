import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {
  rollup
}
from 'rollup';
import fs from 'fs';

function run() {
  rollup({
    entry: 'main.js',
    plugins: [
      babel({
        babelrc: false,
        presets: ["es2015-rollup"],
        // "plugins": ["lodash"]
      }),
      nodeResolve({
        jsnext: true,
        main: true,
      }),
      commonjs(),
    ]
  }).then(function(bundle) {
    bundle.write({
      dest: 'rollup.out.js',
      format: 'cjs',
    })
  })
}

fs.watch('./main.js', function() {
  run();
})
run();


// run this file use `babel-node --presets react,es2015 rollup.config.js`
