import React from 'react';
import {IndexRoute, Redirect, Route} from 'react-router';
import {fetchRole, fetchRoles} from './actions';
import Role from './components/role';
import Roles from './components/roles';

export default (
  <Route path="/">
    <IndexRoute component={Roles} props={{action: fetchRoles}}/>
    <Route component={Role} path="/role/:key" props={{action: fetchRole}}/>
    <Redirect from="redirect/:id" to="/role/:id"/>
  </Route>
);
