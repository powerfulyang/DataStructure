import { MedianOfTwoSortedArrays } from './median-of-two-sorted-arrays';

describe('BinarySearch', () => {
  it('median-of-two-sorted-arrays', () => {
    const nums1 = [1, 3];
    const nums2 = [2];
    expect(MedianOfTwoSortedArrays(nums1, nums2)).toEqual(2);
  });
});
