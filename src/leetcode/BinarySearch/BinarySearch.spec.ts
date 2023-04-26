import { describe, expect, it } from '@jest/globals';
import { leftBound, rightBound } from './index';
import { MedianOfTwoSortedArrays } from './median-of-two-sorted-arrays';

describe('BinarySearch', () => {
  it('median-of-two-sorted-arrays', () => {
    const nums1 = [1, 3];
    const nums2 = [2];
    expect(MedianOfTwoSortedArrays(nums1, nums2)).toEqual(2);
  });

  it('left bound', () => {
    const nums = [1, 2, 2, 2, 3, 4, 5];
    const target = 2;
    expect(leftBound(nums, target)).toEqual(1);
  });

  it('right bound', () => {
    const nums = [1, 2, 2, 2, 3, 4, 5];
    const target = 2;
    expect(rightBound(nums, target)).toEqual(3);
  });
});
