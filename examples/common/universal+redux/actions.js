import fetch from 'isomorphic-fetch';

export const FETCH_EXAMPLE = 'FETCH_EXAMPLE';
export const FETCH_EXAMPLES = 'FETCH_EXAMPLES';

const {hostname = process.env.npm_config_hostname || '0.0.0.0'} = global.location || {};
const {port = process.env.npm_config_port || 3000} = global.location || {};

export function fetchExample (params) {
  const {key} = params;

  return dispatch => {
    fetch(`http://${hostname}:${port}/api/example/${key}`)
      .then(response => response.json())
      .then(state => {
        dispatch({
          state,
          type: FETCH_EXAMPLE
        });
      })
      .catch(console.log);
  };
}

export function fetchExamples () {
  return dispatch => {
    fetch(`http://${hostname}:${port}/api`)
      .then(response => response.json())
      .then(state => {
        dispatch({
          state,
          type: FETCH_EXAMPLES
        });
      })
      .catch(console.log);
  };
}
