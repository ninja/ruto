import {register} from 'ruto';
import {handler} from './handler';
import {routes} from '../routes';

export const plugin = {
  options: {handler, routes},
  register
};
