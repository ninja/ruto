import {match} from 'react-router';

export function middleware ({handler, routes}) {
  if (!handler) { throw new Error('Missing handler.'); }
  if (!routes) { throw new Error('Missing routes.'); }

  return function use (request, response, next) {
    match({location: request.url, routes}, (error, redirect, props) => {
      if (error) { return next(error); }
      if (redirect) {
        const {pathname, search} = redirect;

        return response.redirect(302, pathname + search);
      }
      if (!props) { return next(); }

      handler({props, request, response, next});
    });
  };
}
