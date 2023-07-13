/**
 * \#300 最长递增子序列
 * @see https://leetcode.com/problems/longest-increasing-subsequence
 */
export const lengthOfLIS = (nums: number[]): number => {
  const maxSubsequent: number[] = [];

  nums.forEach((num) => {
    let [left, right] = [0, maxSubsequent.length];
    while (left < right) {
      const mid = Math.floor((right + left) / 2);
      if (maxSubsequent[mid] >= num) right = mid;
      else left = mid + 1;
    }

    maxSubsequent[left] = num;
  });

  return maxSubsequent.length;
};
