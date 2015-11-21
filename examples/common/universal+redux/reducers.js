import {FETCH_EXAMPLE, FETCH_EXAMPLES} from './actions';
import {combineReducers} from 'redux';
import {location} from 'ruto';

// function unique (array) {
//   return [...new Set(array)];
// }

// function union (...arrays) {
//   return [...new Set([].concat(...arrays))];
// }

function example (state = {}, action) {
  if (action.type === FETCH_EXAMPLE) {
    return Object.assign({}, state, action.state.example);
  }

  return state;
}

function examples (state = [], action) {
  if (action.type === FETCH_EXAMPLES) {
    return state.concat(action.state.examples);
  }

  return state;
}

function server (state = '', action) {
  if (action.type === FETCH_EXAMPLE || action.type === FETCH_EXAMPLES) {
    return action.state.server;
  }

  return state;
}

export const reducers = combineReducers({location, example, examples, server});
