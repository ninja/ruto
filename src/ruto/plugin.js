import {createLocation} from 'history';
import {match} from 'react-router';

export function register (server, {handler, routes}, callback) {
  if (!handler) { return callback('Missing handler.'); }
  if (!routes) { return callback('Missing routes.'); }

  server.ext('onPreResponse', (request, reply) => {
    const location = createLocation(request.url.path);

    match({location, routes}, (error, redirect, props) => {
      if (error) { return reply.continue(error); }
      if (redirect) {
        const {pathname, search} = redirect;

        return reply.redirect(pathname, search);
      }
      if (!props) { return reply.continue(); }

      handler({props, reply, request});
    });
  });

  callback();
}

register.attributes = {name: 'ruto'};
