import {config} from './config';

export const assets = {
  publicPath: config.output.publicPath,
  stats: {
    chunks: false,
    colors: true,
    hash: false,
    version: false
  }
};
