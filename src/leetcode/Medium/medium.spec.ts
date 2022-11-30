import { minimumCardPickup } from './MinimumCardPickup';
import { maximumSwap } from './maximumSwap';
import { LRUCache } from './LRUCache';
import { Tree } from '../Tree/Tree';
import { largestValues } from './largestValues';
import { findMinDifference } from './findMinDifference';

describe('Medium', () => {
  it('minimum-consecutive-cards-to-pick-up', () => {
    expect(minimumCardPickup([0, 0])).toBe(2);
  });

  it('maximumSwap', () => {
    expect(maximumSwap(2736)).toBe(7236);
    expect(maximumSwap(9973)).toBe(9973);
    expect(maximumSwap(98368)).toBe(98863);
  });

  it('LRUCache', () => {
    const cache = new LRUCache(2);
    cache.put(2, 1);
    cache.put(3, 2);
    expect(cache.get(3)).toBe(2);
    expect(cache.get(2)).toBe(1);
    cache.put(4, 3);
    expect(cache.get(2)).toBe(1);
    expect(cache.get(3)).toBe(-1);
    expect(cache.get(4)).toBe(3);
  });

  it('largestValues', () => {
    const tree = new Tree([1, 3, 2, 5, 3, null, 9]);
    expect(largestValues(tree.root)).toEqual([1, 3, 9]);
  });

  it('findMinDifference', () => {
    expect(findMinDifference(['23:59', '00:00'])).toBe(1);
    expect(findMinDifference(['00:00', '21:00'])).toBe(180);
  });
});
