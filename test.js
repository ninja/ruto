import {Server} from 'hapi';
import {resolve} from 'path';
import ruto from 'ruto';
import test from 'tape';
import api from './examples/api';

const server = new Server();

server.connection({port: 8888});
server.register([api, {
  options: {
    cache: true,
    handler: ({props, reply}) => reply(props),
    routes: resolve(__dirname, './examples/routes')
  },
  register: ruto
}], error => {
  test('Register plugin:', t => {
    t.error(error, 'Should register without error.');
    t.end();
  });

  test('Route to roles:', t => {
    server.inject('/', response => {
      t.equals(response.statusCode, 200, 'Should return status code: 200.');
      t.end();
    });
  });

  test('Route to role:', t => {
    const key = 'a';

    server.inject(`/role/${key}`, response => {
      const {result, statusCode} = response;

      t.equals(statusCode, 200, 'Should return status code: 200.');
      t.equals(result.params.key, key, `Should return key param with value: "${key}".`);
      t.end();
    });
  });

  test('Redirect to role:', t => {
    server.inject('/redirect/b', response => {
      t.equals(response.statusCode, 302, 'Should return status code: 302.');
      t.end();
    });
  });

  test('Route not found:', t => {
    server.inject('/notfound', response => {
      t.equals(response.statusCode, 404, 'Should return status code: 404.');
      t.end();
    });
  });
});
