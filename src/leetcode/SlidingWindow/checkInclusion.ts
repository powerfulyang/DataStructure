/**
 * @description \#567 Permutation in String
 * @see https://leetcode.com/problems/permutation-in-string/
 */
export const checkInclusion = (s1: string, s2: string) => {
  const helperMap = new Map<string, number>();
  for (const char of s1) {
    helperMap.set(char, (helperMap.get(char) || 0) + 1);
  }
  let left = 0;
  let right = 0;
  let count = helperMap.size;
  while (right < s2.length) {
    const char = s2[right];
    // why do we need to check if the char is in the map?
    // because we only care about the chars in s1
    // if the char is not in s1, we don't need to do anything
    if (helperMap.has(char)) {
      const f = helperMap.get(char);
      helperMap.set(char, f - 1);
      // if frequency is 1, we need to decrease the count
      if (f === 1) {
        count--;
      }
    }
    // we need to move the right pointer every loop
    right++;
    // if the count is 0, it means we have found all the chars in s1
    while (count === 0) {
      // we need to check if the length of the window is equal to s1, if so, return true
      if (right - left === s1.length) {
        return true;
      }
      const leftChar = s2[left];
      // the left char is not in s1, we don't need to do anything
      if (helperMap.has(leftChar)) {
        const f = helperMap.get(leftChar);
        helperMap.set(leftChar, f + 1);
        // if frequency is 0, we need to increase the count
        if (f === 0) {
          count++;
        }
      }
      // we need to move the left pointer every loop
      left++;
    }
  }
  return false;
};
