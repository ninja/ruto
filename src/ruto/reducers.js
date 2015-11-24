import {UPDATE} from './actions';

export function location (state = {
  hash: '',
  pathname: '/',
  search: ''
}, action) {
  if (action.type === UPDATE) {
    if (typeof action.location === 'string') {
      action.location = {pathname: action.location};
    }

    return Object.assign({}, state, action.location);
  }

  return state;
}

