import { describe, expect, it } from '@jest/globals';
import { characterReplacement } from './characterReplacement';
import { checkInclusion } from './checkInclusion';
import { MinimumSizeSubarraySum } from './index';
import { LengthOfLongestSubstring } from './lengthOfLongestSubstring';
import { maxSlidingWindow } from './maxSlidingWindow';

describe('SlidingWindow', () => {
  it('MinimumSizeSubarraySum', () => {
    expect(MinimumSizeSubarraySum(7, [2, 3, 1, 2, 4, 3])).toEqual(2);
  });

  it('SlidingWindowMaximum', () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
  });

  it('LongestSubstringWithoutRepeatingCharacters', () => {
    expect(LengthOfLongestSubstring('abcabcbb')).toEqual(3);
    expect(LengthOfLongestSubstring('bbbbb')).toEqual(1);
    expect(LengthOfLongestSubstring('pwwkew')).toEqual(3);
  });

  it('characterReplacement', () => {
    expect(characterReplacement('ABAB', 2)).toEqual(4);
    expect(characterReplacement('AABABBA', 1)).toEqual(4);
  });

  it('checkInclusion', () => {
    expect(checkInclusion('ab', 'eidbaooo')).toEqual(true);
    expect(checkInclusion('ab', 'eidboaoo')).toEqual(false);
  });
});
