import 'babel-polyfill';
import '../style.css';
import {Provider} from 'react-redux';
import React from 'react';
import {Router} from 'react-router';
import {connect} from 'ruto';
import {createClientStore} from './store';
import {createHistory} from 'history';
import {render} from 'react-dom';
import {routes} from './routes';

const {JSON, document} = global;
const history = createHistory();
const state = JSON.parse(document.getElementById('state').innerHTML);
const props = {history, routes};

createClientStore(state, store => {
  connect({history, store});

  render(
    <Provider store={store}>
      <Router {...props}/>
    </Provider>, document.getElementById('app')
  );
});
