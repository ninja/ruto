import {update} from './actions';

function unequal ({historyLocation, storeLocation}) {
  if (historyLocation.hash !== storeLocation.hash) { return true; }
  if (historyLocation.pathname !== storeLocation.pathname) { return true; }
  if (historyLocation.search !== storeLocation.search) { return true; }

  return false;
}

export function connect ({history, store}) {
  if (typeof store.getState().location === 'undefined') {
    throw new Error('Missing location reducer.');
  }

  const ignore = history.listen(historyLocation => {
    const storeLocation = store.getState().location;

    if (unequal({historyLocation, storeLocation})) {
      const {hash, pathname, search} = historyLocation;

      store.dispatch(update({hash, pathname, search}));
    }
  });

  const unsubscribe = store.subscribe(() => {
    const historyLocation = history.createLocation();
    const storeLocation = store.getState().location;

    if (unequal({historyLocation, storeLocation})) {
      const {hash, pathname, search} = storeLocation;

      history.push([pathname, search, hash].join(''));
    }
  });

  return function disconnect () {
    ignore();
    unsubscribe();
  };
}
