'use strict';

const babel = require('babel-core');
const fs = require('fs');

fs.readdirSync('src/ruto').forEach(file => {
  babel.transformFile(`src/ruto/${file}`, {}, (error, result) => {
    if (error) { throw error; }

    fs.writeFile(`build/${file}`, result.code);
  });
});

fs.writeFileSync('build/bin.js', fs.readFileSync('node_modules/shigoto/bin.js'));
