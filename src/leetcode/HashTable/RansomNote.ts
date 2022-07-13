/**
 * #383, https://leetcode.cn/problems/ransom-note/
 */
export const RansomNote = (ransomNote: string, magazine: string) => {
  const targetMap = new Map<string, number>();
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    const count = targetMap.get(char);
    if (count) {
      targetMap.set(char, count + 1);
    } else {
      targetMap.set(char, 1);
    }
  }

  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];
    const count = targetMap.get(char);
    if (count === 1) {
      targetMap.delete(char);
    } else if (count > 1) {
      targetMap.set(char, count - 1);
    }
  }

  return targetMap.size === 0;
};
