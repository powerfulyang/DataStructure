/**
 * @description \#76 Minimum Window Substring
 * @see https://leetcode.com/problems/minimum-window-substring/
 */
export const minWindow = (s: string, t: string): string => {
  const map = new Map<string, number>();
  for (const c of t) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let count = map.size; // count of characters in t
  let min = Number.MAX_SAFE_INTEGER;
  let result = '';

  // sliding window, right pointer moves first
  while (right < s.length) {
    const rightChar = s[right];
    if (map.has(rightChar)) {
      map.set(rightChar, map.get(rightChar) - 1);
      if (map.get(rightChar) === 0) {
        count--;
      }
    }
    right++;

    // when count is 0, move left pointer
    while (count === 0) {
      // if current window is smaller than min, update min and result
      if (right - left < min) {
        min = right - left;
        result = s.substring(left, right);
      }

      const leftChar = s[left];
      if (map.has(leftChar)) {
        map.set(leftChar, map.get(leftChar) + 1);
        if (map.get(leftChar) > 0) {
          count++;
        }
      }
      left++;
    }
  }

  return result;
};
