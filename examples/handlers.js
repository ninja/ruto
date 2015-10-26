import React from 'react';
import {renderToStaticMarkup, renderToString} from 'react-dom/server';
import {RoutingContext} from 'react-router';
import StateContext from './components/state-context';

export function handleHomomorphic ({props, reply}) {
  const app = renderToStaticMarkup(<RoutingContext {...props}/>);

  reply(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charSet="utf-8"/>
        <title>Homomorphic Example</title>
      </head>
      <body>
        <main id="app">${app}</main>
        <script src="/homomorphic.js"></script>
      </body>
    </html
  `);
}

export function handleIsomorphic ({params, props, reply, route}) {
  // Action assigned in `./routes.js` and defined in `./actions.js`.
  const {action} = route.props;

  action(params)
    .then(state => {
      const app = renderToString(<StateContext state={state}><RoutingContext {...props}/></StateContext>);

      reply(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charSet="utf-8"/>
            <title>Isomorphic Example</title>
          </head>
          <body>
            <main id="app">${app}</main>
            <script id="state" type="application/json">${JSON.stringify(state)}</script>
            <script src="/isomorphic.js"></script>
          </body>
        </html
      `);
    })
    .catch(console.error);
}
