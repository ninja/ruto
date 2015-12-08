import {types} from './types';

export function update (location) {
  return {
    location,
    type: types.UPDATE
  };
}

