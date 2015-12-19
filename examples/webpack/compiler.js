import Webpack from 'webpack';
import {config} from './config';
import {resolve} from 'path';

let compiles = 0;

export const compiler = new Webpack(config);

// Server-side hot module reloading.
compiler.plugin('done', () => {
  if (compiles > 0) {
    const paths = [];

    Object.keys(require.cache).forEach(path => {
      if (~path.indexOf(resolve(__dirname, '..'))) {
        delete require.cache[path];

        paths.push(path.replace(resolve(__dirname, '..'), ''));
      }
    });

    if (paths.length) {
      console.log(`server hot reloading:\n${paths.join('\n')}`);
    }
  }

  compiles += 1;
});
