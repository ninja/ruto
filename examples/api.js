const roles = [
  {key: 'a', name: 'Assassination'},
  {key: 'b', name: 'Countermeasures'},
  {key: 'c', name: 'Espionage'},
  {key: 'd', name: 'Sabotage'}
];

function register (server, options, next) {
  server.route({
    method: 'GET',
    path: '/api/role/{key}',
    handler: (request, reply) => {
      const {key} = request.params;
      const role = roles.find(role => {
        return role.key === key;
      });

      if (typeof role === 'undefined') {
        return reply({role: {
          key,
          name: `Role with key ${key} not found.`
        }}).code(404);
      }

      reply({role});
    }
  });

  server.route({
    method: 'GET',
    path: '/api',
    handler: (request, reply) => reply({roles})
  });

  next();
}

register.attributes = {name: 'Ninja Roles API'};

export default {register};
