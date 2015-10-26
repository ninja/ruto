import React from 'react';
import {createHistory} from 'history';
import {render} from 'react-dom';
import {Router} from 'react-router';
import StateContext from '../components/state-context';
import routes from '../routes';

const {JSON, document} = global;
const app = document.getElementById('app');
const state = JSON.parse(document.getElementById('state').innerHTML);
const history = createHistory();
const props = {history, routes};

global.document.addEventListener('DOMContentLoaded', () => {
  render(<StateContext state={state}><Router {...props}/></StateContext>, app);
});
