/**
 * @description \#167 Two Sum II - Input array is sorted
 * @see https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */
export const twoSum = (numbers: number[], target: number) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};
