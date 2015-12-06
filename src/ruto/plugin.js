import {createLocation} from 'history';
import {match} from 'react-router';

export function register (server, options, callback) {
  const {cache = false, getHandler, getRoutes} = options;
  let {handler, routes} = options;

  if (!handler && !getHandler) { return callback('Missing handler.'); }
  if (!routes && !getRoutes) { return callback('Missing routes.'); }
  if (cache && getHandler) { handler = getHandler(); }
  if (cache && getRoutes) { routes = getRoutes(); }

  server.ext('onPreResponse', (request, reply) => {
    const {path, query} = request.url;
    const location = createLocation(path);

    if (!cache && getHandler) { handler = getHandler(query); }
    if (!cache && getRoutes) { routes = getRoutes(query); }

    match({location, routes}, (error, redirect, props) => {
      if (error) { return reply.continue(error); }
      if (redirect) {
        const {pathname, search} = redirect;

        return reply.redirect(pathname, search);
      }
      if (!props) { return reply.continue(); }

      handler({props, reply});
    });
  });

  callback();
}

register.attributes = {name: 'ruto'};
