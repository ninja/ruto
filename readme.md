## Rūto - Universal routing for React.

Handles all incoming requests with react-router.

Supports Hapi and Connect/Express servers.

302 (redirect) and 404 (not found) are delegated to the server.

Includes optional helpers for connecting routes to a redux store.

See [examples](examples), including hapi/express server and state/redux.

### Hapi plugin:

```javascript
import React from 'react';
import {RoutingContext} from 'react-router';
import {register} from 'ruto';
import {renderToString} from 'react-dom/server';

server.register({
  options: {
    handler: ({props, reply}) => {
      const app = renderToString(<RoutingContext {...props}/>);

      // See examples for universal state/redux techniques.

      reply(`<div id="app">${app}</div><script src="/client.js"></script>`);
    },
    routes: <Route component={App} path="/"/>
  },
  register
});
```

### Express middleware:

```javascript
import React from 'react';
import {RoutingContext} from 'react-router';
import {middleware} from 'ruto';
import {renderToString} from 'react-dom/server';

app.use(middleware({
  handler: ({props, reply}) => {
    const app = renderToString(<RoutingContext {...props}/>);

    // See examples for universal state/redux techniques.

    reply(`<div id="app">${app}</div><script src="/client.js"></script>`);
  },
  routes: <Route component={App} path="/"/>
});
```

### Developing a pull request:

Start examples:

```bash
cd ~/ruto
npm run start
open http://localhost:3000
```

Run tests:

```bash
npm test
```
