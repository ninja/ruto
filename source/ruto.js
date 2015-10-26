import {createLocation} from 'history';
import {match} from 'react-router';
import reload from 'require-reload';

export default function register (server, options, next) {
  const {cache = true, handler, routes: routesPath} = options;

  if (!handler) { return next('Missing handler.'); }
  if (!routesPath) { return next('Missing routes.'); }

  server.ext('onPreResponse', (request, reply) => {
    const location = createLocation(request.path);
    const routes = cache ? require(routesPath) : reload(routesPath);

    if (!cache) { reload.emptyCache(); }

    match({location, routes}, (error, redirect, props) => {
      if (error) { return reply.continue(error); }
      if (redirect) { return reply.redirect(redirect.pathname, redirect.search); }
      if (!props) { return reply.continue(); }

      const {params} = props;
      const route = props.routes[1] || props.routes[0];

      handler({params, props, reply, route});
    });
  });

  next();
}

register.attributes = {name: 'Hapi React Routes'};
