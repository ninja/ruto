import {Server} from 'hapi';
import hapi from 'hapi-test';
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
  if (error) { throw error; }

  test('IndexRoute', t => {
    hapi({server})
      .get('/')
      .end(response => {
        t.equals(response.statusCode, 200, 'Should return status code 200.');
        t.end();
      });
  });

  test('Route', t => {
    const key = 'a';

    hapi({server})
      .get(`/role/${key}`)
      .end(response => {
        const {result, statusCode} = response;

        t.equals(statusCode, 200, 'Should return status code 200.');
        t.equals(result.params.key, key, 'Should return param key.');
        t.end();
      });
  });

  test('Redirect', t => {
    hapi({server})
      .get('/redirect/b')
      .end(response => {
        t.equals(response.statusCode, 302, 'Should return status code 302.');
        t.end();
      });
  });

  test('NotFound', t => {
    hapi({server})
      .get('/notfound')
      .end(response => {
        t.equals(response.statusCode, 404, 'Should return status code 404.');
        t.end();
      });
  });
});
