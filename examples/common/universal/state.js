export function getState (props, callback) {
  const {params, routes} = props;
  const {action} = routes[routes.length - 1];

  if (!action) { return callback({}); }

  action(params)
    .then(state => callback(state))
    .catch(error => { throw error; });
}
