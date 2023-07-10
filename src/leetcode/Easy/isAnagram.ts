/**
 * @description \#242, https://leetcode.com/problems/valid-anagram/
 *
 * @description 给定两个字符串 `s` 和 `t` ，编写一个函数来判断 `t` 是否是 `s` 的字母异位词。
 *
 * @description **注意：**若 `s` 和 `t` 中每个字符出现的次数都相同，则称 `s` 和 `t` 互为字母异位词。
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
