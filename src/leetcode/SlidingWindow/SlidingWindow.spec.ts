import { MinimumSizeSubarraySum } from './index';
import { SlidingWindowMaximum } from './SlidingWindowMaximum';
import { LongestSubstringWithoutRepeatingCharacters } from './LongestSubstringWithoutRepeatingCharacters';

describe('SlidingWindow', () => {
  it('MinimumSizeSubarraySum', () => {
    expect(MinimumSizeSubarraySum(7, [2, 3, 1, 2, 4, 3])).toEqual(2);
  });

  it('SlidingWindowMaximum', () => {
    expect(SlidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
  });

  it('LongestSubstringWithoutRepeatingCharacters', () => {
    expect(LongestSubstringWithoutRepeatingCharacters('abcabcbb')).toEqual(3);
    expect(LongestSubstringWithoutRepeatingCharacters('bbbbb')).toEqual(1);
    expect(LongestSubstringWithoutRepeatingCharacters('pwwkew')).toEqual(3);
  });
});
