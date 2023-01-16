/**
 * @description \#128, https://leetcode.com/problems/longest-consecutive-sequence/
 */
export const longestConsecutive = (nums: number[]): number => {
  const set = new Set(nums);
  let max = 0;
  // iterate through the set
  for (let i = 0; i < nums.length; i++) {
    // why check if the set has the number - 1?
    // because we want to start from the smallest number in the sequence
    // if the set has the number - 1, it means that the number is not the smallest number in the sequence,
    // so we skip it
    if (set.has(nums[i] - 1)) {
      continue;
    }
    // if the set contains the current number
    let j = nums[i];
    // iterate through the set until the next number is not found
    while (set.has(j)) {
      // increment the counter
      j++;
    }
    // update the max
    max = Math.max(max, j - nums[i]);
  }
  return max;
};
