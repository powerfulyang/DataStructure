/**
 * @description \#242, https://leetcode.com/problems/valid-anagram/
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const array = new Array<number>(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    array[s.charCodeAt(i) - a]++;
    array[t.charCodeAt(i) - a]--;
  }
  // fast fail
  return !array.some((x) => x !== 0);
}
