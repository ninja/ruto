import {getExample, examples} from '../common/data';

const server = 'express';

export function register ({app}) {
  app.get('/api/example/:key', function (req, res) {
    const {key} = req.params;
    let example = getExample(key);

    if (typeof example === 'undefined') {
      res.status(404);

      example = {key, name: `Example with key ${key} not found.`};
    }

    res.send({example, server});
  });

  app.get('/api', function (req, res) {
    res.send({examples, server});
  });
}
