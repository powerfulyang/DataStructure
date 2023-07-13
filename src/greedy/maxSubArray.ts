export const maxSubArray = (nums: number[]): number => {
  let maxSum = -Infinity;
  let curSum = 0;

  for (const n of nums) {
    // 如果加入后，子数组的和变大了，我们就更新子数组的和；如果变小了，我们就把当前子数组放弃，开始一个新的子数组（这是贪心的部分）
    // 如果当前和小于0，那么不如直接开始一个新的子序列
    curSum = Math.max(n, curSum + n);
    // 更新最大和
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
};
