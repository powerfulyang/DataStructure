/**
 * @description \#125 Valid Palindrome
 * @see https://leetcode.com/problems/valid-palindrome/
 */
export const isPalindromeString = (s: string) => {
  // 用正则去掉非字母和数字的字符
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // 用双指针判断是否是回文
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
};
