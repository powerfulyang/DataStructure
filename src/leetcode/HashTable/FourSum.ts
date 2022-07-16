/**
 * #18, https://leetcode.cn/problems/4sum/
 */
export const FourSum = (nums: number[], target: number) => {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (!(i > 0 && nums[i] === nums[i - 1])) {
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (!(j > i + 1 && nums[j] === nums[j - 1])) {
          let left = j + 1;
          let right = nums.length - 1;
          while (left < right) {
            const sum = nums[i] + nums[j] + nums[left] + nums[right];
            if (sum === target) {
              result.push([nums[i], nums[j], nums[left], nums[right]]);
              left += 1;
              right -= 1;
              while (left < right && nums[left] === nums[left - 1]) {
                left += 1;
              }
              while (left < right && nums[right] === nums[right + 1]) {
                right -= 1;
              }
            } else if (sum < target) {
              left += 1;
            } else {
              right -= 1;
            }
          }
        }
      }
    }
  }
  return result;
};
