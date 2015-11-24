import {location, update} from 'ruto';
import test from 'tape';

const namespace = 'reducer';

test(`${namespace}: location`, t => {
  const hash = '';
  const pathname = '/';
  const search = '';
  const state = location({hash, pathname, search}, {});

  t.equal(state.hash, hash);
  t.equal(state.pathname, pathname);
  t.equal(state.search, search);
  t.end();
});

test(`${namespace}: update: pathname`, t => {
  const pathname = '/';
  const action = update(pathname);
  const state = location({}, action);

  t.equal(state.pathname, pathname);
  t.end();
});

test(`${namespace}: update: location`, t => {
  const hash = '';
  const pathname = '/';
  const search = '';
  const action = update({hash, pathname, search});
  const state = location({}, action);

  t.equal(state.hash, hash);
  t.equal(state.pathname, pathname);
  t.equal(state.search, search);
  t.end();
});
