import {assets} from '../common/webpack/assets';
import {compiler} from '../common/webpack/compiler';
import register from 'hapi-webpack-plugin';

export const plugin = {
  options: {
    assets,
    compiler
  },
  register
};
