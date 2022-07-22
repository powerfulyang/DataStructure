function backtrack(n: number, k: number, startIndex: number, path: number[], result: number[][]) {
  if (path.length === k) {
    result.push([...path]);
    return;
  }

  for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
    path.push(i);
    backtrack(n, k, i + 1, path, result);
    path.pop();
  }
}

/**
 * #77, https://leetcode.cn/problems/combinations/
 */
export const Combinations = (n: number, k: number): number[][] => {
  const result: number[][] = [];
  backtrack(n, k, 1, [], result);
  return result;
};
