import {Server} from 'hapi';
import {assets, compiler} from '../webpack';
import {handler} from './handler';
import {register as registerAPI} from './api';
import registerWebpack from 'hapi-webpack-plugin';
import {register as registerRuto} from 'ruto';
import {routes} from '../routes';

const {env} = process;
const host = env.npm_config_host || '0.0.0.0';
const port = env.npm_config_port || 3000;
const server = new Server();

server.connection({host, port});

server.register([
  {register: registerAPI},
  {options: {handler, routes}, register: registerRuto},
  {options: {assets, compiler}, register: registerWebpack}
], error => {
  if (error) { throw error; }

  server.start(() => {
    console.log(`rūto hapi: ${server.info.uri}`);
  });
});
