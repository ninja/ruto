# ルート
## Rūto
### Hapi React Router plugin.

React Router handles all incoming requests. 302 redirects and 404 not founds are passed through to default Hapi routing.

Rendering a matched route can be either:
- **homomorphic**: Server and client render separately.
- **isomorphic**: Server renders. Client re-renders only upon user interaction.

### Usage:
See [examples](examples) for details.

### Development:
Optional ruto binary:

```bash
cd ~/ruto
npm link
```

Run tests:

```bash
ruto test
```

Start homomorphic example:

```bash
ruto start
```

Start isomorphic example:

```bash
ruto start -i
```

Start isomorphic example without ruto binary:

```bash
cd ~/ruto
RUTO_HANDLER=isomorphic npm run start
```
