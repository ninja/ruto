import fetch from 'isomorphic-fetch';
import {IndexRoute, Redirect, Route} from 'react-router';
import React from 'react';
import {Example} from './components/example';
import {Examples} from './components/examples';

const {hostname = process.env.npm_config_hostname || '0.0.0.0'} = global.location || {};
const {port = process.env.npm_config_port || 3000} = global.location || {};

function fetchExample (params) {
  return fetch(`http://${hostname}:${port}/api/example/${params.key}`)
    .then(response => response.json())
    .then(state => { return state; });
}

function fetchExamples () {
  return fetch(`http://${hostname}:${port}/api`)
    .then(response => response.json())
    .then(state => { return state; });
}

export const routes = (
  <Route path="/">
    <IndexRoute action={fetchExamples} component={Examples}/>
    <Redirect from="example/301" to="example/200"/>
    <Route action={fetchExample} component={Example} path="example/:key"/>
  </Route>
);
