import {Server} from 'hapi';
import Webpack from 'webpack';
import api from './api';
import {resolve} from 'path';
import ruto from 'ruto';
import {handleHomomorphic, handleIsomorphic} from './handlers';
import webpackConfig from './webpack.config';
import webpackMiddleware from 'hapi-webpack-plugin';

const isomorphic = process.env.RUTO_HANDLER === 'isomorphic';
const server = new Server();

server.connection({port: 3000});

server.register([
  {
    options: {
      cache: process.env.NODE_ENV === 'production',
      handler: isomorphic ? handleIsomorphic : handleHomomorphic,
      routes: resolve(__dirname, 'routes')
    },
    register: ruto
  },
  {
    options: {
      assets: {
        publicPath: webpackConfig.output.publicPath,
        stats: {
          chunks: false, colors: true, hash: false, version: false
        }
      },
      compiler: new Webpack(webpackConfig)
    },
    register: webpackMiddleware
  },
  api
], error => {
  if (error) { throw error; }

  server.start(() => {
    console.log(`Rūto - ${isomorphic ? 'isomorphic' : 'homomorphic'} example: ${server.info.uri}`);
  });
});

