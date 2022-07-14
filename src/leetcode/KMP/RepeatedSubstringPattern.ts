import { getNext } from './ImplementStrStr';

/**
 * #459, https://leetcode.cn/problems/repeated-substring-pattern/
 */
export const RepeatedSubstringPattern = (s: string) => {
  // abcabcabc next=[0, 0, 0, 1, 2, 3, 4, 5, 6]
  const next = getNext(s);
  const sLength = s.length;
  const nextLength = next.length;
  const suffixLength = next[nextLength - 1];
  return suffixLength > 0 && sLength % (sLength - suffixLength) === 0;
};
