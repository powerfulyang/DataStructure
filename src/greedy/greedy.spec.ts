import { maxSubArray } from '@/greedy/maxSubArray';
import { describe, expect, it } from '@jest/globals';

describe('greedy', () => {
  it('maxSubArray', () => {
    const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const maxSum = maxSubArray(arr);
    expect(maxSum).toBe(6);
  });
});
