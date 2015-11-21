import '../style.css';
import {Provider} from 'react-redux';
import React from 'react';
import {Router} from 'react-router';
import {applyMiddleware, compose, createStore} from 'redux';
import {connect} from 'ruto';
import {createHistory} from 'history';
import {reducers} from './reducers';
import reduxThunk from 'redux-thunk';
import {render} from 'react-dom';
import {routes} from './routes';

const {JSON, document} = global;
const history = createHistory();
const state = JSON.parse(document.getElementById('state').innerHTML);
const store = compose(applyMiddleware(reduxThunk))(createStore)(reducers, state);
const props = {history, routes};

connect({history, store});

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers'));
  });
}

render(
  <Provider store={store}>
    <Router {...props}/>
  </Provider>, document.getElementById('app')
);
