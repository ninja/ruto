import {App} from '../../common/universal/components/app';
import React from 'react';
import {RoutingContext} from 'react-router';
import {getState} from '../../common/universal/state';
import {renderToStaticStyle} from '../../common/style';
import {renderToString} from 'react-dom/server';

export function handler ({props, reply, request}) {
  const style = renderToStaticStyle({userAgent: request.headers['user-agent']});

  getState(props, state => {
    const app = renderToString(
      <App state={state}>
        <RoutingContext {...props}/>
      </App>
    );

    state = JSON.stringify(state);

    reply(`<!doctype html>
      <html>
        <head>
          <meta charSet="utf-8"/>
          ${style}
        </head>
        <body>
          <div id="app">${app}</div>
          <script id="state" type="application/json">${state}</script>
          <script src="/example-universal.js"></script>
        </body>
      </html>
    `);
  });
}
