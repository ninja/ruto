import {createLocation} from 'history';
import {match} from 'react-router';

export function middleware (options) {
  const {cache = false, getHandler, getRoutes} = options;
  let {handler, routes} = options;

  if (!handler && !getHandler) { throw new Error('Missing handler.'); }
  if (!routes && !getRoutes) { throw new Error('Missing routes.'); }
  if (cache && getHandler) { handler = getHandler(); }
  if (cache && getRoutes) { routes = getRoutes(); }

  return function use (request, response, next) {
    const {query, url} = request;
    const location = createLocation(url);

    if (!cache && getHandler) { handler = getHandler(query); }
    if (!cache && getRoutes) { routes = getRoutes(query); }

    match({location, routes}, (error, redirect, props) => {
      if (error) { return response.status(500).send(error); }
      if (redirect) {
        const {pathname, search} = redirect;

        return response.redirect(302, pathname + search);
      }
      if (!props) { return next(); }

      function reply (string) {
        response.send(string);
        response.end();
      }

      handler({props, reply});
    });
  };
}
