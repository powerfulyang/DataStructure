/**
 * #15, https://leetcode.cn/problems/3sum/
 */
export const ThreeSum = (nums: number[]) => {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // eslint-disable-next-line no-continue
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left += 1;
        right -= 1;
        while (left < right && nums[left] === nums[left - 1]) {
          left += 1;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right -= 1;
        }
      } else if (sum < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return result;
};
