function isPalindrome(s: string, l: number, r: number) {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
}

function backtracking(str: string, index: number, path: string[], res: string[][]) {
  if (index >= str.length) {
    res.push([...path]);
    return;
  }
  for (let i = index; i < str.length; i++) {
    if (isPalindrome(str, index, i)) {
      path.push(str.substring(index, i + 1));
      backtracking(str, i + 1, path, res);
      path.pop();
    }
  }
}

/**
 * #131, https://leetcode.cn/problems/palindrome-partitioning/
 */
export const PalindromePartitioning = (s: string) => {
  const result: string[][] = [];
  backtracking(s, 0, [], result);
  return result;
};
