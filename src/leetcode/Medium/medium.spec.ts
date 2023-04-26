import { describe, expect, it } from '@jest/globals';
import { Tree } from '../Tree/Tree';
import { findMinDifference } from './findMinDifference';
import { isValidSudoku } from './isValidSudoku';
import { largestValues } from './largestValues';
import { longestConsecutive } from './longestConsecutive';
import { LRUCache } from './LRUCache';
import { maxArea } from './maxArea';
import { maximumSwap } from './maximumSwap';
import { minimumCardPickup } from './MinimumCardPickup';
import { productExceptSelf } from './productExceptSelf';
import { threeSum } from './threeSum';

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

  it('productExceptSelf', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    expect(productExceptSelf([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
  });

  it('isValidSudoku', () => {
    expect(
      isValidSudoku([
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ]),
    ).toBe(true);
  });

  it('longestConsecutive', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  it('threeSum', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it('maxArea', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
});
