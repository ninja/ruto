import {UPDATE} from 'ruto/actions';
import {update} from 'ruto';
import test from 'tape';

const namespace = 'action';

test(`${namespace}: type`, t => {
  t.equal(update().type, UPDATE);
  t.end();
});

test(`${namespace}: update`, t => {
  const hash = '';
  const pathname = '/';
  const search = '';
  const {location} = update({hash, pathname, search});

  t.equal(location.hash, hash);
  t.equal(location.pathname, pathname);
  t.equal(location.search, search);
  t.end();
});
