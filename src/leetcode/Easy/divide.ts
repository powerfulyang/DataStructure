/* eslint-disable  */

function multiply(divisor: number, mid: number) {
  // 不允许使用乘法
  let result = 0;
  for (let i = 0; i < mid; i++) {
    result += divisor;
  }
  return result;
}

/**
 * @description 整数除法，不使用乘法、除法和 mod 运算符
 * @see https://leetcode.cn/problems/xoh6Oh/
 * @param {number} dividend - 被除数
 * @param {number} divisor - 除数
 */
export const divide = (dividend: number, divisor: number) => {
  const MAX_VALUE = 2 ** 31 - 1;
  const MIN_VALUE = -(2 ** 31);
  // 考虑被除数为最小值的情况
  if (dividend === MIN_VALUE) {
    if (divisor === -1) {
      return MAX_VALUE;
    }
    if (divisor === 1) {
      return MIN_VALUE;
    }
  }
  // 考虑除数为最小值的情况
  if (divisor === MIN_VALUE) {
    return dividend === MIN_VALUE ? 1 : 0;
  }
  // 考虑被除数为 0 的情况
  if (dividend === 0) {
    return 0;
  }
  // 一般情况，使用二分查找
  // 将所有的正数取相反数，这样就只需要考虑一种情况
  let sign = true;
  if (dividend > 0) {
    dividend = -dividend;
    sign = !sign;
  }
  if (divisor > 0) {
    divisor = -divisor;
    sign = !sign;
  }
  // 二分查找的上下界
  let left = 1;
  let right = MAX_VALUE;
  let ans = 0;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    // 用除数乘以二分查找的中间数得到的商仍然大于被除数
    if (multiply(divisor, mid) >= dividend) {
      ans = mid;
      // 下一轮搜索的区间是 [mid + 1, right]
      left = mid + 1;
    } else {
      // 下一轮搜索的区间是 [left, mid - 1]
      right = mid - 1;
    }
  }
  return sign ? ans : -ans;
};
