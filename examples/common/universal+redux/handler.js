import {Provider} from 'react-redux';
import React from 'react';
import {RoutingContext} from 'react-router';
import {createServerStore} from './store';
import {renderToString} from 'react-dom/server';

export function handler ({props, reply}) {
  createServerStore(props, store => {
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
  });
}
