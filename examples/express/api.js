import {Router} from 'express';
import {getExample, examples} from '../data';

export const api = new Router();

api.get('/', (request, response) => {
  response.send({examples, server: 'express'});
});

api.get('/example/:key', (request, response) => {
  const {key} = request.params;
  let example = getExample(key);

  if (typeof example === 'undefined') {
    response.status(404);

    example = {key, name: `Example with key ${key} not found.`};
  }

  response.send({example, server: 'express'});
});
