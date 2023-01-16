/**
 * @description \#49, https://leetcode.com/problems/group-anagrams/
 */
export const groupAnagrams = (strs: string[]) => {
  const map = new Map<string, string[]>();
  for (const s of strs) {
    const charFreq = Array.from({ length: 26 }, () => 0);
    for (let i = 0; i < s.length; i++) charFreq[s.charCodeAt(i) - 97]++;
    const keyStr = charFreq.toString();
    if (!map.has(keyStr)) map.set(keyStr, []);
    map.get(keyStr).push(s);
  }
  return Array.from(map.values());
};
