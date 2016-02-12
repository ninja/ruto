import {applyMiddleware, compose, createStore} from 'redux';
import {reducers} from './reducers';
import reduxThunk from 'redux-thunk';

export function createClientStore (state, callback) {
  const store = compose(applyMiddleware(reduxThunk))(createStore)(reducers, state);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers'));
    });
  }

  callback(store);
}

export function createServerStore (props, callback) {
  const {params, routes} = props;
  const {action} = routes[routes.length - 1];
  const store = compose(applyMiddleware(reduxThunk))(createStore)(reducers);

  if (!action) { return callback(); }

  store.subscribe(() => callback(store));
  store.dispatch(action(params));
}
