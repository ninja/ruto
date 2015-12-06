import {App} from './components/app';
import React from 'react';
import {RoutingContext} from 'react-router';
import {getState} from './state';
import {renderToString} from 'react-dom/server';

export function handler ({props, reply}) {
  getState(props, state => {
    const app = renderToString(
      <App state={state}>
        <RoutingContext {...props}/>
      </App>
    );

    reply(`<!doctype html>
<html>
  <head>
    <meta charSet="utf-8"/>
    <title>Rūto Universal</title>
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
    <script id="state" type="application/json">${JSON.stringify(state)}</script>
    <script src="/example-universal.js"></script>
  </body>
</html>`);
  });
}
