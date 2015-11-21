import {middleware} from 'ruto';

export function register ({app}) {
  app.use(middleware({
    getHandler: query => query.redux ?
      require('../common/universal+redux/handler').handler :
      require('../common/universal/handler').handler,
    getRoutes: query => query.redux ?
      require('../common/universal+redux/routes').routes :
      require('../common/universal/routes').routes
  }));
}
