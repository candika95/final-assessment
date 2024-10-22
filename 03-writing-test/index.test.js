import { sum } from './index.js';
import { test } from 'node:test';
import { strictEqual } from 'node:assert';

test('Test function', (t) => {
  strictEqual(sum(1, 2), 3, 'sum(1, 2) should return 3');
});