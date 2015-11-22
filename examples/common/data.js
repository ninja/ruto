export const examples = [
  {key: '200', name: 'Route', path: '/example/200'},
  {key: '301', name: 'Redirect', path: '/example/301'},
  {key: '404', name: 'Not Found', path: '/nowhere'}
];

export function getExample (key) {
  return examples.find(example => {
    return example.key === key;
  });
}
