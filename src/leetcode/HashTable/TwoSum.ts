/**
 * #1, https://leetcode.cn/problems/two-sum/
 */
export const TwoSum = (nums: number[], target: number) => {
  const helperMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const rIndex = helperMap.get(target - nums[i]);
    if (rIndex !== undefined) {
      return [rIndex, i];
    }
    helperMap.set(nums[i], i);
  }
  return [];
};
