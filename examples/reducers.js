import {types} from './types';
import {combineReducers} from 'redux';

const {FETCH_EXAMPLE, FETCH_EXAMPLES} = types;

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

export const reducers = combineReducers({example, examples, server});
