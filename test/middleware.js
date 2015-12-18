import express from 'express';
import {middleware} from 'ruto';
import request from 'supertest';
import {routes} from './routes';
import test from 'tape';

const app = express();
const namespace = 'express middleware';

app.use(middleware({
  handler: ({props, request, response}) => {
    response.send({props, headers: request.headers});
    response.end();
  },
  routes
}));

test(`${namespace}: route to root:`, t => {
  request(app)
    .get('/')
    .expect(200)
    .end((error, response) => {
      t.error(error, 'No error.');
      t.equals(response.statusCode, 200, 'Should return status code: 200.');
      t.end();
    });
});

test(`${namespace}: route to endpoint:`, t => {
  const id = 'a';

  request(app)
    .get(`/endpoint/${id}`)
    .expect(200)
    .end((error, response) => {
      t.error(error, 'No error.');

      const {body, statusCode} = response;

      t.equals(statusCode, 200, 'Should return status code: 200.');
      t.equals(body.props.params.id, id, `Should return id param with value: "${id}".`);
      t.true(typeof body.headers === 'object', 'Should return headers object.');
      t.end();
    });
});

test(`${namespace}: redirect to endpoint:`, t => {
  request(app)
    .get('/redirect/b')
    .expect(302)
    .end((error, response) => {
      t.error(error, 'No error.');
      t.equals(response.statusCode, 302, 'Should return status code: 302.');
      t.end();
    });
});

test(`${namespace}: route not found:`, t => {
  request(app)
    .get('/notfound')
    .expect(404)
    .end((error, response) => {
      t.error(error, 'No error.');
      t.equals(response.statusCode, 404, 'Should return status code: 404.');
      t.end();
    });
});
