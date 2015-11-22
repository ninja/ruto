import express from 'express';
import {register as api} from './api';
import {register as ruto} from './ruto';
import {register as webpack} from './webpack';

const app = express();
const {env} = process;
const address = env.npm_config_address || '0.0.0.0';
const port = env.npm_config_port || 3000;

[api, ruto, webpack].forEach(register => register({app}));

app.listen({address, port}, error => {
  if (error) { throw error; }

  console.log(`Rūto express: http://${address}:${port}`);
});
