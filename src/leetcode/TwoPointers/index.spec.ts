import { longestCommonPrefix } from '@/leetcode/TwoPointers/longestCommonPrefix';
import { describe, expect, it } from '@jest/globals';

describe('two pointers', () => {
  it('longest_common_prefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });
});
