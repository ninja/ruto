import {Provider} from 'react-redux';
import React from 'react';
import {RouterContext} from 'react-router';
import {createServerStore} from '../store';
import {renderToStaticStyle} from '../style';
import {renderToString} from 'react-dom/server';

export function handler ({props, request, response}) {
  const style = renderToStaticStyle({userAgent: request.headers['user-agent']});

  createServerStore(props, store => {
    const app = renderToString(
      <Provider store={store}>
        <RouterContext {...props}/>
      </Provider>
    );
    const state = JSON.stringify(store.getState());

    response.send(`<!doctype html>
      <html>
        <head>
          <meta charSet="utf-8"/>
          ${style}
        </head>
        <body>
          <div id="app">${app}</div>
          <script id="state" type="application/json">${state}</script>
          <script src="/client.js"></script>
        </body>
      </html>
    `);
  });
}
