import React from 'react';
import {IndexRoute, Redirect, Route} from 'react-router';

function Component () {}

export const routes = (
  <Route component={Component} path="/">
    <IndexRoute component={Component}/>
    <Route component={Component} path="/endpoint/:id"/>
    <Redirect from="redirect/:id" to="/endpoint/:id"/>
  </Route>
);
