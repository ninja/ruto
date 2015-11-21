import {Provider} from 'react-redux';
import React from 'react';
import {RoutingContext} from 'react-router';
import {applyMiddleware, compose, createStore} from 'redux';
import {update} from 'ruto';
import {reducers} from './reducers';
import reduxThunk from 'redux-thunk';
import {renderToString} from 'react-dom/server';

export function handler ({props, reply}) {
  const {params, routes} = props;
  const {action} = routes[routes.length - 1];
  const store = compose(applyMiddleware(reduxThunk))(createStore)(reducers);

  function render () {
    const app = renderToString(
      <Provider store={store}>
        <RoutingContext {...props}/>
      </Provider>
    );
    const state = JSON.stringify(store.getState());

    reply(`<!doctype html>
<html>
  <head>
    <meta charSet="utf-8"/>
    <title>Rūto Universal + Redux</title>
    <style>
      body {
        background-color: #333;
        color: white;
        font-family: -apple-system, "Helvetica Neue", "Lucida Grande", sans-serif;
      }

      a {color: rgb(0, 216, 255)}
    </style>
  </head>
  <body>
    <main id="app">${app}</main>
    <script id="state" type="application/json">${state}</script>
    <script src="/example-universal+redux.js"></script>
  </body>
</html>`);
  }

  store.dispatch(update(props.location.pathname));

  if (!action) { return render(); }

  store.subscribe(render);
  store.dispatch(action(params));
}
