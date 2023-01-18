/**
 * @description \#3 Longest Substring Without Repeating Characters
 * @see https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 */
export const LengthOfLongestSubstring = (s: string): number => {
  let l = 0;
  let ans = 0;
  const helperSet = new Set();
  for (let r = 0; r < s.length; r++) {
    const char = s[r];
    while (helperSet.has(char)) {
      helperSet.delete(s[l]);
      l++;
    }
    helperSet.add(char);
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
};
