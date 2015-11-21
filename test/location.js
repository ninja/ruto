import {connect, location, update} from 'ruto';
import {createMemoryHistory} from 'history';
import {combineReducers, createStore} from 'redux';
import test from 'tape';

const namespace = 'location';

test(`${namespace}: set pathname disconnected`, t => {
  const hash = '';
  const pathname = '/';
  const search = '';
  const store = createStore(combineReducers({location}));
  const unsubscribe = store.subscribe(() => {
    unsubscribe();

    const {location} = store.getState();

    t.equal(location.hash, hash);
    t.equal(location.pathname, pathname);
    t.equal(location.search, search);
    t.end();
  });

  store.dispatch(update({hash, pathname, search}));
});

test(`${namespace}: set pathname connected`, t => {
  const hash = '';
  const history = createMemoryHistory();
  const pathname = '/';
  const search = '';
  const store = createStore(combineReducers({location}));

  t.plan(9);// 3 history tests x 2 (fires twice) + 3 store tests

  history.listen(location => {
    t.equal(location.hash, hash);
    t.equal(location.pathname, pathname);
    t.equal(location.search, search);
  });

  store.subscribe(() => {
    const {location} = store.getState();

    t.equal(location.hash, hash);
    t.equal(location.pathname, pathname);
    t.equal(location.search, search);
  });

  connect({history, store});

  t.comment('Update path via history.');
  history.push(pathname);

  t.comment('Update path via store.');
  store.dispatch(update(pathname));
});
