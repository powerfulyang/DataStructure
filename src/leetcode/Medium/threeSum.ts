/**
 * @description \#15 3Sum
 * @see https://leetcode.com/problems/3sum/
 */
export const threeSum = (nums: number[]) => {
  const ans = [];
  // sort the array, ascending order
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length; i++) {
    // skip the same number
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = sortedNums.length - 1;
    while (j < k) {
      const sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
      if (sum === 0) {
        ans.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
        j++;
        k--;
        // skip the same number
        while (j < k && sortedNums[j] === sortedNums[j - 1]) {
          j++;
        }
        // skip the same number
        while (j < k && sortedNums[k] === sortedNums[k + 1]) {
          k--;
        }
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return ans;
};
