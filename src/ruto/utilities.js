export function createTypes ({namespace, types}) {
  if (!types) { throw new Error('types property required'); }
  if (!Array.isArray(types)) { throw new Error('types must be an array'); }

  const typesObject = {};

  types.forEach(type => {
    typesObject[type] = namespace ? `@@${namespace}/${type}` : type;
  });

  return typesObject;
}
