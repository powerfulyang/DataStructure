/**
 * @description \#11 Container With Most Water
 * @see https://leetcode.com/problems/container-with-most-water/
 */
export const maxArea = (height: number[]): number => {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
