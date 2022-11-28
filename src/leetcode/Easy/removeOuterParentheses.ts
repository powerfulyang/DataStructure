/**
 * \#1021, https://leetcode.cn/problems/remove-outermost-parentheses/
 */
export const removeOuterParentheses = (s: string) => {
  const stack: string[] = [];
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
      if (stack.length > 1) {
        result += s[i];
      }
    } else {
      stack.pop();
      if (stack.length > 0) {
        result += s[i];
      }
    }
  }
  return result;
};
