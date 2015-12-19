import {getExample, examples} from '../data';

export function register (server, options, next) {
  server.route({
    method: 'GET',
    path: '/api/example/{key}',
    handler: (request, reply) => {
      const {key} = request.params;
      const example = getExample(key);

      if (typeof example === 'undefined') {
        return reply({
          example: {key, name: `Example with key ${key} not found.`},
          server: 'hapi'
        }).code(404);
      }

      reply({example, server: 'hapi'});
    }
  });

  server.route({
    method: 'GET',
    path: '/api',
    handler: (request, reply) => reply({examples, server: 'hapi'})
  });

  next();
}

register.attributes = {name: 'Ninja Roles API'};
