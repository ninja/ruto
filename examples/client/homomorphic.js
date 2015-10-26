import React from 'react';
import {createHistory} from 'history';
import {render} from 'react-dom';
import {Router} from 'react-router';
import routes from '../routes';

const {document} = global;
const app = document.getElementById('app');
const history = createHistory();
const props = {history, routes};

document.addEventListener('DOMContentLoaded', () => {
  render(<Router {...props}/>, app);
});
