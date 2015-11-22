import {register} from 'ruto';

export const plugin = {
  options: {
    getHandler: query => query.redux ?
      require('../common/universal+redux/handler').handler :
      require('../common/universal/handler').handler,
    getRoutes: query => query.redux ?
      require('../common/universal+redux/routes').routes :
      require('../common/universal/routes').routes
  },
  register
};
