import 'babel-polyfill';
import {Provider} from 'react-redux';
import React from 'react';
import {Router, browserHistory} from 'react-router';
import {createClientStore} from './store';
import {render} from 'react-dom';
import {routes} from './routes';

const {JSON, document} = global;
const state = JSON.parse(document.getElementById('state').innerHTML);
const props = {history: browserHistory, routes};

createClientStore(state, store => {
  render(
    <Provider store={store}>
      <Router {...props}/>
    </Provider>, document.getElementById('app')
  );
});
