import {App} from './components/app';
import React from 'react';
import {IndexRoute, Redirect, Route} from 'react-router';
import {Example} from './components/example';
import {Examples} from './components/examples';
import {fetchExample, fetchExamples} from './actions';

export const routes = (
  <Route component={App} path="/">
    <IndexRoute action={fetchExamples} component={Examples}/>
    <Redirect from="example/301" to="/example/200"/>
    <Route action={fetchExample} component={Example} path="example/:key"/>
  </Route>
);
