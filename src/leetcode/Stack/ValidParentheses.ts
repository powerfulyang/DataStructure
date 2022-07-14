import { Stack } from './Stack';

/**
 * #20, https://leetcode.cn/problems/valid-parentheses
 */
export const ValidParentheses = (s: string): boolean => {
  const stack = new Stack<string>();
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === '{') {
      stack.push('}');
    } else if (item === '[') {
      stack.push(']');
    } else if (item === '(') {
      stack.push(')');
    } else if (item !== stack.pop()) {
      return false;
    }
  }
  return stack.isEmpty();
};
