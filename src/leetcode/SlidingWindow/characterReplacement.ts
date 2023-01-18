/**
 * @description \#424 Longest Repeating Character Replacement
 * @see https://leetcode.com/problems/longest-repeating-character-replacement/
 */
export const characterReplacement = (s: string, k: number): number => {
  let maxFrequency = 0;
  let left = 0;
  const helperMap = new Map<string, number>();
  let ans = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    const frequency = (helperMap.get(char) || 0) + 1;
    maxFrequency = Math.max(frequency, maxFrequency);
    helperMap.set(char, frequency);
    while (right - left + 1 - maxFrequency > k) {
      const leftChar = s[left];
      const f = helperMap.get(leftChar);
      helperMap.set(leftChar, f - 1);
      left++;
    }
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};
