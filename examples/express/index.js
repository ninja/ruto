import {api} from './api';
import {assets} from '../webpack/assets';
import {compiler} from '../webpack/compiler';
import express from 'express';
import {handler} from './handler';
import {middleware} from 'ruto';
import middlewareDev from 'webpack-dev-middleware';
import middlewareHot from 'webpack-hot-middleware';
import {routes} from '../routes';

const app = express();
const {env} = process;
const address = env.npm_config_address || '0.0.0.0';
const port = env.npm_config_port || 3000;

app.use('/api', api);
app.use(middleware({handler, routes}));
app.use(middlewareDev(compiler, assets));
app.use(middlewareHot(compiler));

app.listen({address, port}, error => {
  if (error) { throw error; }

  console.log(`Rūto express: http://${address}:${port}`);
});
