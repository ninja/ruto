'use strict';

const babel = require('babel-core');
const fs = require('fs');
const resolve = require('path').resolve;

function transpile (src, dest) {
  fs.stat(src, (error, stats) => {
    if (error) { throw error; }

    if (stats.isDirectory()) {
      fs.readdir(src, (error, files) => {
        if (error) { throw error; }

        fs.stat(dest, error => {
          if (error) { fs.mkdirSync(dest); }

          files.forEach(file => {
            transpile(resolve(src, file), resolve(dest, file));
          });
        });
      });
    }

    if (stats.isFile()) {
      if (src.split('.').pop() !== 'js') { return; }

      babel.transformFile(src, {}, (error, result) => {
        if (error) { throw error; }

        fs.writeFile(dest, result.code);
      });
    }
  });
}

fs.stat('build', error => {
  if (error) { fs.mkdirSync('build'); }

  fs.readFile('node_modules/shigoto/bin.js', (error, data) => {
    if (error) { throw error; }

    fs.writeFile('build/bin.js', data, error => {
      if (error) { throw error; }
    });
  });


  transpile('src/ruto', 'build');
});
