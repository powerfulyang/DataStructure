/**
 * 最大相同前后缀长度
 * 双指针
 * needle: abcdabc
 * next[0]: 0
 * i = 1, j = 0, i->b j->a , next[1] = 0
 * i = 2, j = 0, i->c j->a , next[2] = 0
 * i = 3, j = 0, i->d j->a , next[3] = 0
 * i = 4, j = 0, i->a j->a , next[4] = 1
 * i = 5, j = 1, i->b j->b , next[5] = 2
 * i = 6, j = 2, i->c j->c , next[6] = 3
 * i = 7 break;
 */
export function getNext(needle: string) {
  const next = [0];
  let i = 1;
  let j = 0;
  while (i < needle.length) {
    if (needle[i] === needle[j]) {
      next[i] = j + 1;
      i++;
      j++;
    } else if (j > 0) {
      j = next[j - 1];
    } else {
      next[i] = 0;
      i++;
    }
  }
  return next;
}

/**
 * #28, https://leetcode.cn/problems/implement-strstr/
 */
export const ImplementStrStr = (haystack: string, needle: string): number => {
  if (needle.length === 0) {
    return 0;
  }
  const next = getNext(needle);
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) {
        return i - j;
      }
      j++;
    }
  }
  return -1;
};
