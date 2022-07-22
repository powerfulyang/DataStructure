function backtracking(
  candidates: number[],
  target: number,
  path: number[],
  startIndex: number,
  result: number[][],
) {
  if (target <= 0) {
    if (target === 0) {
      result.push([...path]);
    }
    return;
  }
  for (let i = startIndex; i < candidates.length; i++) {
    if (i > startIndex && candidates[i] === candidates[i - 1]) {
      // ignore duplicated
    } else {
      const tmp = candidates[i];
      path.push(tmp);
      backtracking(candidates, target - tmp, path, i + 1, result);
      path.pop();
    }
  }
}

/**
 * #40, https://leetcode.cn/problems/combination-sum-ii/
 */
export const CombinationSum2 = (candidates: number[], target: number) => {
  candidates.sort();
  const result = [];
  backtracking(candidates, target, [], 0, result);
  return result;
};
