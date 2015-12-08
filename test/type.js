import {createTypes} from 'ruto';
import test from 'tape';

const namespace = 'type';

test(`${namespace}: createTypes`, t => {
  t.equal(createTypes({types: ['TEST']}).TEST, 'TEST');
  t.end();
});

test(`${namespace}: createTypes with namespace`, t => {
  t.equal(createTypes({namespace: 'test', types: ['TEST']}).TEST, '@@test/TEST');
  t.end();
});
