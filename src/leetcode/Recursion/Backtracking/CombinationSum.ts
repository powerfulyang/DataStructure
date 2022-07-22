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
    const tmp = candidates[i];
    path.push(tmp);
    backtracking(candidates, target - tmp, path, i, result);
    path.pop();
  }
}

/**
 * #39, https://leetcode.cn/problems/combination-sum/
 */
export const CombinationSum = (candidates: number[], target: number) => {
  const result = [];
  backtracking(candidates, target, [], 0, result);
  return result;
};
