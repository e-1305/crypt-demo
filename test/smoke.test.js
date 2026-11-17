// Smoke test: the app's dependencies still load and behave after a graft.
const { test } = require('node:test');
const assert = require('node:assert');

test('lodash still merges objects', () => {
  const _ = require('lodash');
  assert.deepStrictEqual(_.merge({ a: 1 }, { b: 2 }), { a: 1, b: 2 });
});

test('handlebars still renders templates', () => {
  const Handlebars = require('handlebars');
  assert.strictEqual(Handlebars.compile('Hi {{name}}')({ name: 'Igor' }), 'Hi Igor');
});

test('minimist still parses args', () => {
  const minimist = require('minimist');
  assert.strictEqual(minimist(['--limb', 'arm']).limb, 'arm');
});
