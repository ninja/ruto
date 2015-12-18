import 'babel-polyfill';
import {App} from './components/app';
import React from 'react';
import {Router} from 'react-router';
import {createHistory} from 'history';
import {render} from 'react-dom';
import {routes} from './routes';

const {JSON, document} = global;
const history = createHistory();
const props = {history, routes};

render(
  <App state={JSON.parse(document.getElementById('state').innerHTML)}>
    <Router {...props}/>
  </App>, document.getElementById('app'));
