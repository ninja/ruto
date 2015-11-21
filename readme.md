## Rūto - Universal routing for React.

Handles all incoming requests with react-router.

Supports Hapi and Connect/Express servers.

302 (redirect) and 404 (not found) are delegated to the server.

Includes optional helpers for connecting routes to a redux store.

### Usage:

See [examples](examples).

### Developing a pull request:

Start examples:

```bash
cd ~/ruto
npm run start
open http://localhost:3000/
open http://localhost:3000/?redux=true
```

Run tests:

```bash
npm test
```
