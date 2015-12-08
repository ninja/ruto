import {types} from './types';

export function location (state = {
  hash: '',
  pathname: '/',
  search: ''
}, action) {
  if (action.type === types.UPDATE) {
    if (typeof action.location === 'string') {
      action.location = {pathname: action.location};
    }

    return Object.assign({}, state, action.location);
  }

  return state;
}

