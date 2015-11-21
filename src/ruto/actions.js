export const UPDATE = '@@location/UPDATE';

export function update (location) {
  return {
    location,
    type: UPDATE
  };
}

