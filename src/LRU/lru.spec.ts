import { LRUCache } from '@/LRU/index';
import { expect, test } from '@jest/globals';

test('LRU', () => {
  const lru = new LRUCache(3);
  lru.put(1, 1);
  lru.put(2, 2);
  lru.put(3, 3);
  expect(lru.get(1)).toBe(1);
  lru.put(4, 4);
  expect(lru.get(4)).toBe(4);
  expect(lru.get(3)).toBe(3);
  expect(lru.get(2)).toBe(-1);
  lru.put(5, 5);
  expect(lru.get(1)).toBe(-1);
  expect(lru.get(2)).toBe(-1);
  expect(lru.get(3)).toBe(3);
  expect(lru.get(4)).toBe(4);
  expect(lru.get(5)).toBe(5);
});
