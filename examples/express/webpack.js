import {assets} from '../common/webpack/assets';
import {compiler} from '../common/webpack/compiler';
import middlewareDev from 'webpack-dev-middleware';
import middlewareHot from 'webpack-hot-middleware';

export function register ({app}) {
  app.use(middlewareDev(compiler, assets));
  app.use(middlewareHot(compiler));
}
