/* eslint-disable no-bitwise */
/**
 * @description Maximum XOR of Two Numbers in an Array
 * @link https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
 */
export const findMaximumXor = (nums: number[]): number => {
  let max = 0;
  let mask = 0;

  for (let i = 31; i >= 0; i--) {
    mask |= 1 << i;
    // q: what is the purpose of this set?
    // a: to store the prefix of each number
    // q: why do we need to store the prefix?
    // a: to find the max xor
    // q: how do we find the max xor?
    // a: we need to find the max prefix that can xor with the current prefix
    const set = new Set<number>();

    for (const num of nums) {
      set.add(num & mask);
    }

    const tmp = max | (1 << i);

    for (const prefix of set) {
      if (set.has(tmp ^ prefix)) {
        max = tmp;
        break;
      }
    }
  }

  return max;
};
