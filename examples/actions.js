import 'isomorphic-fetch';

const {fetch} = global;

export function fetchRole (params) {
  const {key} = params;

  return fetch(`http://localhost:3000/api/role/${key}`)
    .then(response => response.json());
}

export function fetchRoles () {
  return fetch('http://localhost:3000/api')
    .then(response => response.json());
}
