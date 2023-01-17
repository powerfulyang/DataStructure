/**
 * @description \#42 Trapping Rain Water
 * @see https://leetcode.com/problems/trapping-rain-water/
 */
export const trap = (height: number[]): number => {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;

  // 从两边向中间遍历
  while (left < right) {
    // 比较两边的高度
    if (height[left] < height[right]) {
      // 如果左边的高度小于右边的高度
      // 那么每有一个比左边矮的，就可以存储一定的水
      // 如果遍历元素的高度大于左边最高的高度，那么就更新左边最高的高度
      height[left] >= leftMax ? (leftMax = height[left]) : (result += leftMax - height[left]);
      left++; // 左边的柱子较矮，移动左指针
    } else {
      // 如果右边的高度小于等于左边的高度
      // 那么每有一个比右边矮的，就可以存储一定的水
      // 如果遍历元素的高度大于右边最高的高度，那么就更新右边最高的高度
      height[right] >= rightMax ? (rightMax = height[right]) : (result += rightMax - height[right]);
      right--; // 右边的柱子较矮，移动右指针
    }
  }

  return result;
};
