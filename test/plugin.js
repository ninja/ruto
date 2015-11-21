import {Server} from 'hapi';
import {register} from 'ruto';
import {routes} from './routes';
import test from 'tape';

const namespace = 'hapi plugin';
const server = new Server();

server.connection();
server.register({
  options: {
    handler: ({props, reply}) => reply(props),
    routes
  },
  register
}, error => {
  test(`${namespace}: register plugin:`, t => {
    t.error(error, 'Should register without error.');
    t.end();
  });

  test(`${namespace}: start server:`, t => {
    server.start(() => {
      t.pass('Should start.');
      t.end();
    });
  });

  test(`${namespace}: route to root:`, t => {
    server.inject('/', response => {
      t.equals(response.statusCode, 200, 'Should return status code: 200.');
      t.end();
    });
  });

  test(`${namespace}: route to endpoint:`, t => {
    const id = 'a';

    server.inject(`/endpoint/${id}`, response => {
      const {result, statusCode} = response;

      t.equals(statusCode, 200, 'Should return status code: 200.');
      t.equals(result.params.id, id, `Should return id param with value: "${id}".`);
      t.end();
    });
  });

  test(`${namespace}: redirect to endpoint:`, t => {
    server.inject('/redirect/b', response => {
      t.equals(response.statusCode, 302, 'Should return status code: 302.');
      t.end();
    });
  });

  test(`${namespace}: route not found:`, t => {
    server.inject('/notfound', response => {
      t.equals(response.statusCode, 404, 'Should return status code: 404.');
      t.end();
    });
  });

  test(`${namespace}: stop server:`, t => {
    server.stop(() => {
      t.pass('Should stop.');
      t.end();
    });
  });
});
