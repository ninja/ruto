import {App} from './components/app';
import React from 'react';
import {RoutingContext} from 'react-router';
import {renderToString} from 'react-dom/server';

export function handler ({props, reply}) {
  const {params, routes} = props;
  const {action} = routes[routes.length - 1];

  function render (state) {
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
  }

  if (!action) { return render({}); }

  action(params)
    .then(state => render(state))
    .catch(error => { throw error; });
}
