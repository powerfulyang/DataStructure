import { findMaximumXor } from '@/leetcode/Tree/findMaximumXor';
import { describe, expect, it } from '@jest/globals';

describe('Trie', () => {
  it('should work', () => {
    const res = findMaximumXor([3, 10, 5, 25, 2, 8]);
    expect(res).toBe(28);
  });
});
