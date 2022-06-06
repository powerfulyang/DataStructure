/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 *
 * Example 1:
 *
 * Input: s = "()"
 * Output: true
 * Example 2:
 *
 * Input: s = "()[]{}"
 * Output: true
 * Example 3:
 *
 * Input: s = "(]"
 * Output: false
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/valid-parentheses
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
import { Stack } from './Stack';

export const isValid = (s: string): boolean => {
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

describe('Valid Parentheses', () => {
  it('test', () => {
    expect(isValid('{}')).toBe(true);
    expect(isValid('{')).toBe(false);
  });
});
