import Webpack from 'webpack';
import {resolve} from 'path';

export const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['./examples/client'],
  module: {loaders: [{
    exclude: /node_modules/,
    include: resolve(__dirname, '../..'),
    loader: 'babel',
    test: /\.js$/
  }]},
  output: {
    filename: 'client.js',
    path: resolve(__dirname, '../../build'),
    publicPath: '/'
  },
  resolve: {modulesDirectories: ['src', 'node_modules']}
};

export const assets = {
  publicPath: config.output.publicPath,
  stats: {
    chunks: false,
    colors: true,
    hash: false,
    version: false
  }
};

export const compiler = new Webpack(config);
