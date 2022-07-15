import { MinimumSizeSubarraySum } from './index';
import { SlidingWindowMaximum } from './SlidingWindowMaximum';

describe('SlidingWindow', () => {
  it('MinimumSizeSubarraySum', () => {
    expect(MinimumSizeSubarraySum(7, [2, 3, 1, 2, 4, 3])).toEqual(2);
  });

  it('SlidingWindowMaximum', () => {
    expect(SlidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
  });
});
