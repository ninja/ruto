import '../style.css';
import {Provider} from 'react-redux';
import React from 'react';
import {Router} from 'react-router';
import {connect} from 'ruto';
import {createHistory} from 'history';
import {createClientStore} from './store';
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
