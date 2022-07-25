/**
 * #4, https://leetcode.cn/problems/median-of-two-sorted-arrays/
 */
export const MedianOfTwoSortedArrays = (nums1: number[], nums2: number[]): number => {
  const m = nums1.length;
  const n = nums2.length;
  if (m > n) {
    return MedianOfTwoSortedArrays(nums2, nums1);
  }
  let min = 0;
  let max = m;
  while (min <= max) {
    const i = Math.floor((min + max) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;
    if (i < m && nums2[j - 1] > nums1[i]) {
      min = i + 1;
    } else if (i > 0 && nums1[i - 1] > nums2[j]) {
      max = i - 1;
    } else {
      let left: number;
      if (i === 0) {
        left = nums2[j - 1];
      } else if (j === 0) {
        left = nums1[i - 1];
      } else {
        left = Math.max(nums1[i - 1], nums2[j - 1]);
      }
      if ((m + n) % 2 === 1) {
        return left;
      }
      let right: number;
      if (i === m) {
        right = nums2[j];
      } else if (j === n) {
        right = nums1[i];
      } else {
        right = Math.min(nums1[i], nums2[j]);
      }
      return (left + right) / 2;
    }
  }
  return NaN;
};
