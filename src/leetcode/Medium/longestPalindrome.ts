export const longestPalindrome = (s: string) => {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    const s1 = expandAroundCenter(s, i, i); // 奇数
    const s2 = expandAroundCenter(s, i, i + 1); // 偶数
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
};

/**
 * @description 从中心向两边扩展
 */
function expandAroundCenter(s: string, i: number, i2: number) {
  while (i >= 0 && i2 < s.length && s[i] === s[i2]) {
    i--;
    i2++;
  }
  return s.slice(i + 1, i2);
}
