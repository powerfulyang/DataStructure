/**
 * #3, https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 */
export const LongestSubstringWithoutRepeatingCharacters = (s: string): number => {
  let max = 0;
  let start = 0;
  let end = 0;
  const map = new Map<string, number>();
  while (end < s.length) {
    const char = s[end];
    if (map.has(char)) {
      start = Math.max(start, map.get(char) + 1);
    }
    map.set(char, end);
    max = Math.max(max, end - start + 1);
    end++;
  }
  return max;
};
