import {UPDATE} from './actions';

export function location (state = {
  hash: '',
  pathname: '/',
  search: ''
}, action) {
  if (action.type === UPDATE) {
    return Object.assign({}, state, action.location);
  }

  return state;
}

