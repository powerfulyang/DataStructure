import { minimumCardPickup } from './MinimumCardPickup';
import { maximumSwap } from './maximumSwap';
import { LRUCache } from './LRUCache';

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
});
