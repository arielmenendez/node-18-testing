import test from 'node:test';
import assert from 'node:assert';

test('example test', () => {
  assert.equal(1, 0, '1 is not equal to 0');
});

test('example object test', () => {
  assert.deepEqual({ a: 1 }, { a: 1 }, 'Objects are not equal');
});

test('async test example', async () => {
  const number = await Promise.resolve(3);
  assert.equal(number, 3, 'number is not equal to 3');
});

test('try Array.findLast', () => {
  const numbers = [2, 4, 6, 8];
  const lastEven = numbers.findLast((n) => n % 2 === 0); // 8
  assert.equal(lastEven, 8);
});

test('try Array.findLastIndex', () => {
  const numbers = [2, 4, 6, 8];
  const lastEvenIndex = numbers.findLastIndex((n) => n % 2 === 0); // 3
  assert.equal(lastEvenIndex, 3);
});

test('fetch', async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
  const json = await response.json();
  assert.equal(json.name, 'ditto');
});

test('try catch fetch', async () => {
  const tryFetch = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const json = await response.json();
    } catch {
      throw new Error('whatever');
    }
  };

  assert.rejects(tryFetch, /^Error: whatever$/);
});
