import {Provider} from 'react-redux';
import React from 'react';
import {RoutingContext} from 'react-router';
import {createServerStore} from '../../common/universal+redux/store';
import {renderToStaticStyle} from '../../common/style';
import {renderToString} from 'react-dom/server';

export function handler ({props, request, response}) {
  const style = renderToStaticStyle({userAgent: request.headers['user-agent']});

  createServerStore(props, store => {
    const app = renderToString(
      <Provider store={store}>
        <RoutingContext {...props}/>
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
          <script src="/example-universal+redux.js"></script>
        </body>
      </html>
    `);
  });
}
