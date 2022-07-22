function backtrack(
  k: number,
  target: number,
  startIndex: number,
  path: number[],
  result: number[][],
) {
  if (k === path.length || target < 0) {
    if (target === 0) {
      result.push([...path]);
    }
    return;
  }
  for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
    path.push(i);
    backtrack(k, target - i, i + 1, path, result);
    path.pop();
  }
}

/**
 * #216, https://leetcode.cn/problems/combination-sum-iii/
 */
export const CombinationSum3 = (k: number, target: number) => {
  // 首先定义 path and result
  const result: number[][] = [];
  const path: number[] = [];
  // 定义 startIndex
  backtrack(k, target, 1, path, result);
  return result;
};
