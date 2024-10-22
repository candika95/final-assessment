import { sum } from './index.js';
import { strictEqual } from 'node:assert';

try {
  strictEqual(sum(1, 2), 3);
  console.log('Test passed');
} catch (error) {
  console.error(error);
}
