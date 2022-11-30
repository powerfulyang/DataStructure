/**
 * @description \#509 斐波那契数列
 * @see {@link https://leetcode-cn.com/problems/fibonacci-number/}
 * @param n - 0 <= n <= 30
 * @author powerfulyang
 * @summary 迭代法
 */
export const fib = (n: number): number => {
  if (n <= 1) return n;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    const sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
};
